import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Text, View, TextInput,
  TouchableOpacity,
  Modal, Button, StatusBar, FlatList
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite';
import computerTerms from './assets/db/localDB';
import styles  from './assets/styles/style';


const db = SQLite.openDatabase('dictionary.db');

const WordItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <Text style={styles.word}>{item.word}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedWord, setSelectedWord] = useState(null);
  const [bookmarksVisible, setBookmarksVisible] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [dictionaryData, setDictionaryData] = useState([]);
  
  const createAndInsertComputerTerms = () => {
    db.transaction(tx => {
      // Create the 'Computer Terms' table if it doesn't exist
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS dictionary (
          word TEXT PRIMARY KEY,
          lexicalCategory TEXT,
          definition TEXT,
          pronunciation TEXT,
          synonym TEXT,
          antonym TEXT,
          sentence TEXT
        );`
      );
  
               
      // Execute INSERT statements for each item in computerTerms within the transaction
      Object.values(computerTerms).forEach(item => {
        const values = [item.word, item.lexicalCategory, item.definition, item.pronunciation, item.synonym, item.antonym, item.sentence];

        const insertStatement = `INSERT INTO dictionary ('word', 'lexicalCategory', 'definition', 'pronunciation', 'synonym', 'antonym', 'sentence') VALUES ('${item.word}', '${item.lexicalCategory}', "${item.definition}", "${item.pronunciation}", '${item.synonym}', '${item.antonym}', "${item.sentence}")`;

  // console.log(insertStatement);

  tx.executeSql(
    insertStatement,
    (_, result) => {
      // Success callback
      console.log('Inserted item:', item.word, result);
    },
    (_, error) => {
      // Error callback
      console.log('Error inserting item:', item.word, 'Error:', error);
    }
  );
});
tx.executeSql(
  "SELECT * FROM 'dictionary' WHERE word LIKE ?", 
  [`%${searchText.toLowerCase()}%`],
  (_, rows ) => {
    const data = rows;
    console.log('Fetched data:', data);
    setDictionaryData(data);
  },
  (_, error) => console.error('Error fetching data:', error)
);
    }, (error) => {
      // Transaction error callback
      console.log('Transaction error:', error);
    }, 
    );
  };
 
  
  useEffect(() => {
      createAndInsertComputerTerms();
      }, []);

  const filterData = () => {
    if (searchText.trim() === '') {
      return [];
    }
    return dictionaryData.filter(item => item.word.toLowerCase().includes(searchText.toLowerCase()));
  };

  const renderItem = ({ item }) => <WordItem item={item} onPress={showWordDetails} />;

  const showWordDetails = (word) => {
    setSelectedWord(word);
  };

  const closeModal = () => {
    setSelectedWord(null);
  };

  const toggleBookmark = (word) => {
    if (bookmarks.includes(word)) {
      const updatedBookmarks = bookmarks.filter(item => item !== word);
      setBookmarks(updatedBookmarks);
    } else {
      setBookmarks([...bookmarks, word]);
    }
  };

  const isWordBookmarked = (word) => bookmarks.includes(word);
  const renderBookmarkedWord = ({ item }) => (
    <TouchableOpacity onPress={() => showWordDetails(item)}>
      <Text style={styles.bookmarkedWord}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#0047ab" barStyle="light" />
      <View style={{ backgroundColor: "#0073cf", padding: 10 }}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={text => setSearchText(text)}
          value={searchText}
        />
      </View>
      {searchText.trim() !== '' && (
        <FlatList
          style={{ padding: 16 }}
          data={filterData()}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
        />
      )}

      <Modal visible={selectedWord !== null} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedWord?.word}</Text>
          <Text style={styles.itemContent}>LexicalCategory: {selectedWord?.lexicalCategory}</Text>
          <Text style={styles.itemContent}>Definition: {selectedWord?.definition}</Text>
          <Text style={styles.itemContent}>Pronunciation: {selectedWord?.pronunciation}</Text>
          <Text style={styles.itemContent}>Synonym: {selectedWord?.synonym || 'N/A'}</Text>
          <Text style={styles.itemContent}>Antonym: {selectedWord?.antonym || 'N/A'}</Text>
          <Text style={styles.itemContent}>Sentence: {selectedWord?.sentence}</Text>
          <View style={styles.fixToText}>
            <Button
              title={isWordBookmarked(selectedWord?.word) ? 'Remove Bookmark' : 'Bookmark'}
              onPress={() => toggleBookmark(selectedWord?.word)}
              color="blue"
            />
            <Button title="Go Back" onPress={closeModal} style={{ width: 50 }} color="red" />
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.bookmarkIconContainer}
        onPress={() => setBookmarksVisible(!bookmarksVisible)}
      >
        <EvilIcons name="star" size={40} color="black" />
      </TouchableOpacity>

      {bookmarksVisible && (
        <View style={styles.bookmarkedWordsContainer}>
          <Text style={styles.bookmarksTitle}>Bookmarked Words:</Text>
          <FlatList
            data={bookmarks}
            renderItem={renderBookmarkedWord}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
};



export default App;

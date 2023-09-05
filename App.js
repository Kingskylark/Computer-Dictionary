
import * as React from 'react';
import { useState, useEffect } from 'react';
import {
   Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
  StatusBar,
  FlatList,
  StyleSheet,
  Animated,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite';
import computerTerms from './ComputerTerms';
import { styles } from './style'; 
import { BackHandler } from 'react-native';

const WordItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)} style={styles.wordItem}>
      <Text style={styles.word}>{item.word}</Text>
      <EvilIcons name="arrow-right" size={24} color="black" />
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
    db.transaction((tx) => {
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
      [],
        (_, result) => {
          console.log('Table created successfully:', result);
        },
        (_, error) => {
          console.error('Error creating table:', error);
        };
    });
  };

  const insertData = () => {
    // Now you can use the imported computerTerms for insertion
    db.transaction((tx) => {
      computerTerms.forEach(
        (term) => {
          const {
            Word,
            LexicalCategory,
            Definition,
            Pronunciation,
            Synonym,
            Antonym,
            Sentence,
          } = term;

          tx.executeSql(
            'INSERT OR IGNORE INTO dictionary (word, lexicalCategory, definition, pronunciation, synonym, antonym, sentence) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [
              Word,
              LexicalCategory,
              Definition,
              Pronunciation,
              Synonym,
              Antonym,
              Sentence,
            ],
            (_, result) => {
              console.log('Inserted item:', Word, result);
            },
            (_, error) => {
              console.error('Error inserting item:', Word, 'Error:', error);
            }
          );
          tx.executeSql(
            'SELECT * FROM dictionary WHERE word LIKE ?',
            [`%${searchText.toLowerCase()}%`],
            (_, { rows }) => {
              const data = rows._array;
              console.log(data);
              setDictionaryData(data);
            },
            (_, error) => console.error('Error fetching data:', error)
          );
        },
        (error) => {
          // Transaction error callback
          console.log('Transaction error:', error);
        }
      );
    });
  };

  const handleBackButtonPress = () => {
    closeModal();
    return true; // Prevent default behavior (exiting the app)
  };

  const db = SQLite.openDatabase('dictionary.db');
  useEffect(() => {
    createAndInsertComputerTerms();
    insertData();
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButtonPress
    );

    return () => {
      // Remove the back button listener when the component unmounts
      backHandler.remove();
    };
  }, []);

  const filterData = () => {
    if (searchText.trim() === '') {
      return [];
    }
    return dictionaryData.filter((item) =>
      item.word.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const renderItem = ({ item }) => (
    <WordItem item={item} onPress={showWordDetails} />
  );

  const showWordDetails = (word) => {
    setSelectedWord(word);
  };

  const closeModal = () => {
    setSelectedWord(null);
  };

  const toggleBookmark = (word) => {
    if (bookmarks.includes(word)) {
      const updatedBookmarks = bookmarks.filter((item) => item !== word);
      setBookmarks(updatedBookmarks);
    } else {
      setBookmarks([...bookmarks, word]);
    }
  };

  const isWordBookmarked = (word) => bookmarks.includes(word);

  const renderBookmarkedWord = ({ item }) => {
    const foundWord = dictionaryData.find((word) => word.word === item);

    if (foundWord) {
      return (
        <TouchableOpacity onPress={() => showWordDetails(foundWord)}>
          <Text style={styles.bookmarkedWord}>{foundWord.word}</Text>
        </TouchableOpacity>
      );
    }

    return null; // Handle the case when the word is not found
  };

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#0047ab" barStyle="light" />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
      </View>
      {searchText.trim() !== '' && (
        <Animated.FlatList
          style={styles.list}
          data={filterData()}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
        />
      )}

    <Modal visible={selectedWord !== null} animationType="slide">
  <View style={styles.modalContainer}>
    <View style={styles.modalHeader}>
      <Text style={styles.modalTitle}>{selectedWord?.word}</Text>
      <Text style={styles.lexicalCategory}>
        {selectedWord?.lexicalCategory}
      </Text>
    </View>
    <View style={styles.modalBody}>
      <Text style={styles.definition}>
        Definition: {selectedWord?.definition}
      </Text>
      <Text style={styles.pronunciation}>
        Pronunciation: {selectedWord?.pronunciation}
      </Text>
      <Text style={styles.synonym}>
        Synonym: {selectedWord?.synonym || 'N/A'}
      </Text>
      <Text style={styles.antonym}>
        Antonym: {selectedWord?.antonym || 'N/A'}
      </Text>
      <Text style={styles.sentence}>Sentence: {selectedWord?.sentence}</Text>
    </View>
    <View style={styles.modalFooter}>
      <TouchableOpacity
        style={[
          styles.bookmarkButton,
          {
            backgroundColor: isWordBookmarked(selectedWord?.word)
              ? 'red'
              : 'blue',
          },
        ]}
        onPress={() => toggleBookmark(selectedWord?.word)}
      >
        <Text style={styles.bookmarkButtonText}>
          {isWordBookmarked(selectedWord?.word)
            ? 'Remove Bookmark'
            : 'Bookmark'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={closeModal}
      >
        <Text style={styles.goBackButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

      <TouchableOpacity
        style={styles.bookmarkIconContainer}
        onPress={() => setBookmarksVisible(!bookmarksVisible)}>
        <EvilIcons name="star" size={40} color="black" />
      </TouchableOpacity>

      {bookmarksVisible && (
        <View style={styles.bookmarkedWordsContainer}>
  <Text style={styles.bookmarksTitle}>Bookmarked Words:</Text>
  <FlatList
    data={bookmarks}
    renderItem={renderBookmarkedWord}
    keyExtractor={(item, index) => index.toString()}
    style={styles.bookmarkedWordItem}
  />
</View>

      )}
    </View>
  );
};

export default App;

import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
  StatusBar,
  FlatList,
  Animated,
} from "react-native";

import { EvilIcons } from "@expo/vector-icons";

import * as SQLite from "expo-sqlite";

import dictionary from "./ComputerTerms";

import { styles } from "./style";

import { BackHandler } from "react-native";

const WordItem = React.memo(({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)} style={styles.wordItem}>
      <Text style={styles.word}>{item.word}</Text>
      <EvilIcons name="arrow-right" size={24} color="black" />
    </TouchableOpacity>
  );
});

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedWord, setSelectedWord] = useState(null);
  const [bookmarkedWordsVisible, setBookmarkedWordsVisible] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [dictionaryData, setDictionaryData] = useState([]);

  const db = SQLite.openDatabase("dictionary.db");

  const createComputerTerms = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS dictionary (
              word TEXT PRIMARY KEY,
              lexicalCategory TEXT,
              definition TEXT,
              pronunciation TEXT,
              synonym TEXT,
              antonym TEXT,
              sentence TEXT
            );`,
        [],
        (_, result) => {
          // console.log("Table created successfully:", result);
        },
        (_, error) => {
          console.error("Error creating table:", error);
        }
      );
    });
  };

  const insertData = () => {
    db.transaction((tx) => {
      dictionary.forEach((item) => {
        const {
          Word,
          LexicalCategory,
          Definition,
          Pronunciation,
          Synonym,
          Antonym,
          Sentence,
        } = item;

        tx.executeSql(
          "INSERT OR IGNORE INTO dictionary (word, lexicalCategory, definition, pronunciation, synonym, antonym, sentence) VALUES (?, ?, ?, ?, ?, ?, ?)",
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
            // console.log("Inserted item:", Word, result);
          },
          (_, error) => {
            console.error("Error inserting item:", Word, "Error:", error);
          }
        );
      });

      tx.executeSql(
        "SELECT * FROM dictionary",
        [],
        (_, { rows }) => {
          const data = rows._array;
          // console.log(data);
          setDictionaryData(data);
        },
        (_, error) => console.error("Error fetching data:", error)
      );
    });
  };

  const handleBackButtonPress = () => {
    if (selectedWord !== null) {
      closeModal();
      return true;
    } else if (bookmarkedWordsVisible) {
      closeBookmarkedWordsModal();
      return true;
    }
    return false;
  };

  useEffect(() => {
    createComputerTerms();
    insertData();

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButtonPress
    );

    return () => {
      backHandler.remove();
    };
  }, [selectedWord, bookmarkedWordsVisible]);

  const filterData = () => {
    if (searchText.trim() === "") {
      return dictionary;
    }

    const filteredData = dictionaryData.filter((item) =>
      item.word.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filteredData.length === 0) {
      // No matching words found for the search text
      return [{ error: true }];
    }

    return filteredData;
  };

  const renderItem = ({ item }) => {
    if (item.error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorHeader}>Oops!</Text>
          <Text style={styles.errorText}>No word found, search for another word</Text>
        </View>
      );
    }

    return <WordItem item={item} onPress={showWordDetails} />;
  };

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
          <Text style={styles.bookmarkedWordItem}>{foundWord.word}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error! Word not found</Text>
      </View>
    );
  };

  const closeBookmarkedWordsModal = () => {
    setBookmarkedWordsVisible(false);
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
      {dictionaryData.length > 0 && (
        <FlatList
          style={styles.list}
          data={searchText.trim() === "" ? dictionaryData : filterData()}
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
              Synonym: {selectedWord?.synonym || "N/A"}
            </Text>
            <Text style={styles.antonym}>
              Antonym: {selectedWord?.antonym || "N/A"}
            </Text>
            <Text style={styles.sentence}>
              Sentence: {selectedWord?.sentence}
            </Text>
          </View>
          <View style={styles.modalFooter}>
            <TouchableOpacity
              style={[
                styles.bookmarkButton,
                {
                  backgroundColor: isWordBookmarked(selectedWord?.word)
                    ? "red"
                    : "blue",
                },
              ]}
              onPress={() => toggleBookmark(selectedWord?.word)}
            >
              <Text style={styles.bookmarkButtonText}>
                {isWordBookmarked(selectedWord?.word)
                  ? "Remove Bookmark"
                  : "Bookmark"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.goBackButton} onPress={closeModal}>
              <Text style={styles.goBackButtonText}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={bookmarkedWordsVisible} animationType="slide">
        <View style={styles.bookmarkedWordsContainer}>
          <Text style={styles.bookmarksTitle}>Bookmarked Words:</Text>
          <FlatList
            data={bookmarks}
            renderItem={renderBookmarkedWord}
            keyExtractor={(item, index) => index.toString()}
            style={styles.bookmarkedWordItem}
          />
          <TouchableOpacity style={backgroundColor="#0047ab"} onPress={closeBookmarkedWordsModal}>
              <Text style={styles.errorText}>Go Back</Text>
            </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.bookmarkIconContainer}
        onPress={() => setBookmarkedWordsVisible(!bookmarkedWordsVisible)}
      >
        <EvilIcons name="star" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default App;

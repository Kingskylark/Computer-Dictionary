import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  // Styling for the main container of the application
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  
  // Styling for the search container
  searchContainer: {
    backgroundColor: '#0073cf',
    padding: 10,
    marginTop: 20,
  },
  
  // Styling for the search input field
  searchInput: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  
  // Styling for a list container
  list: {
    padding: 16,
  },
  
  // Styling for an item in the word list
  wordItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  
  // Styling for the word text
  word: {
    fontSize: 18,
    color: '#333',
  },
  
  // Styling for a divider line
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  
  // Styling for a bookmark icon container
  bookmarkIconContainer: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  
  // Styling for a button
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 25,
  },
  
  // Styling for button text
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  
  // Styling for the modal container
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  
  // Styling for the modal header
  modalHeader: {
    alignItems: 'center',
  },
  
  // Styling for the modal title
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  
  // Styling for lexical category text
  lexicalCategory: {
    fontSize: 18,
    color: 'gray',
  },
  
  // Styling for the modal body
  modalBody: {
    marginVertical: 16,
  },
  
  // Styling for word definition text
  definition: {
    fontSize: 16,
    marginBottom: 8,
  },
  
  // Styling for word pronunciation text
  pronunciation: {
    fontSize: 16,
    marginBottom: 8,
  },
  
  // Styling for synonym text
  synonym: {
    fontSize: 16,
    marginBottom: 8,
  },
  
  // Styling for antonym text
  antonym: {
    fontSize: 16,
    marginBottom: 8,
  },
  
  // Styling for sentence text
  sentence: {
    fontSize: 16,
    marginBottom: 8,
  },
  
  // Styling for the modal footer
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  // Styling for the bookmark button
  bookmarkButton: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  
  // Styling for the bookmark button text
  bookmarkButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  
  // Styling for the go back button
  goBackButton: {
    flex: 1,
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 16,
  },
  
  // Styling for the go back button text
  goBackButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  
  // Styling for the container of bookmarked words
  bookmarkedWordsContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  
  // Styling for the title of bookmarked words
  bookmarksTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
  // Styling for an item in the bookmarked words list
  bookmarkedWordItem: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
});

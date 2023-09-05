import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    
  },
  searchContainer: {
    backgroundColor: '#0073cf',
    padding: 10,
    marginTop:20,
  },
  searchInput: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  list: {
    padding: 16,
  },
  wordItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  word: {
    fontSize: 18,
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
   bookmarkIconContainer: {
    position: 'absolute', 
    right: 10, 
    bottom: 10, 
  },

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
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  modalHeader: {
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  lexicalCategory: {
    fontSize: 18,
    color: 'gray',
  },
  modalBody: {
    marginVertical: 16,
  },
  definition: {
    fontSize: 16,
    marginBottom: 8,
  },
  pronunciation: {
    fontSize: 16,
    marginBottom: 8,
  },
  synonym: {
    fontSize: 16,
    marginBottom: 8,
  },
  antonym: {
    fontSize: 16,
    marginBottom: 8,
  },
  sentence: {
    fontSize: 16,
    marginBottom: 8,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookmarkButton: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookmarkButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  goBackButton: {
    flex: 1,
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 16,
  },
  goBackButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bookmarkedWordsContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  bookmarksTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookmarkedWordItem: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },


});

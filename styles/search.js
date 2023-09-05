import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    searchTitle: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
    },
    noOfSearchedJobs: {
        marginTop: 2,
        fontFamily: FONT.medium,
        fontSize: SIZES.small,
        color: COLORS.primary,
    },
    loaderContainer: {
        marginTop: SIZES.medium
    },
    footerContainer: {
        marginTop: SIZES.small,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    paginationButton: {
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.tertiary
    },
    paginationImage: {
        width: '60%',
        height: '60%',
        tintColor: COLORS.white
    },
    paginationTextBox: {
        width: 30,
        height: 30,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    paginationText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: COLORS.primary
    },
    
      inputBox: {
        marginTop: 15,
        marginLeft: 10,
        width: '80%',
        height: 38,
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 6,
        color: 'white',
      },
    
      outputContainer: {
        alignItems: 'center',
      },
    
      detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
      },
    
      detailsTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        flexDirection: 'row',
        flexWrap: 'wrap'
      },
    
      goButton: {
        padding: 5,
        marginTop: 15,
        marginLeft: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 10,
      },
    
      img: {
        width: 27,
        height: 27,
      },
    
      horizontalLine: {
        height: 2,
        width: '95%',
        backgroundColor: 'white',
        marginBottom: 10
      },
    
      row: {
        flexDirection: 'row',
        marginTop: 0,
      },
    
      imageDesign: {
        width: 140,
        height: 130,
        marginLeft: 100,
        marginTop: 30,
      }
});

export default styles;

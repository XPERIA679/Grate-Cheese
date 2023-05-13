const styles ={

    container: {
      flex: 1,
      backgroundColor: '#FDFCF4',
      padding: 20,
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    card: {
      flexBasis: '48%',
      backgroundColor: '#F4DF9C',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
      marginBottom: 10,
    },
    image: {
      width: 135,
      height: 120,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    info: {
      padding: 10,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    price: {
      fontSize: 17,
      color: '#808080',
      marginBottom: 10,
      textAlign: 'right',
      alignSelf: 'center',
    },
    button: {
      backgroundColor: '#FFAE52',
      fontWeight: 'bold',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#000000',
      textAlign: 'center',
    },
    modal: {
      flex: 1,
      backgroundColor: '#F4DF9C',
      padding: 20,
    },
    modalImage: {
      width: '100%',
      height: 300,
      resizeMode: 'cover',
      marginBottom: 20,
    },
    modalInfo: {
      flex: 1,
    },
    modalName: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    modalPrice: {
      fontSize: 25,
      color: '#000000',
      marginBottom: 8,
    },
    quantityPicker: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      paddingHorizontal: 10,
      paddingVertical: 5,
      justifyContent: 'flex-start',
      position: 'absolute',
      bottom: 3,
      left: 180,
    },
    arrowButton: {
      width: 30,
      height: 30,
      backgroundColor: '#f2f2f2',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 5,
    },
    arrowButtonText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    quantityText: {
      fontSize: 20,
      marginHorizontal: 10,
    },
    quantityLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 10,
    },
    quantityPickerBtn: {
      backgroundColor: '#f0f0f0',
      borderWidth: 0,
      width: 30,
      height: 30,
      fontSize: 18,
      color: '#333',
      textAlign: 'center',
    },
    quantityPickerBtnHover: {
      cursor: 'pointer',
    },
    quantityPickerValue: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 30,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      borderWidth: 1,
      borderColor: '#ccc',
    },
    quantityPickerValueFocus: {
      outline: 'none',
    },
    quantityPickerBtnDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },

    modalDescription: {
      fontSize: 16,
      marginBottom: 10,
    },
    descriptionRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    descriptionIcon: {
      marginRight: 8,
      marginBottom: 10,
    },
    modalButton: {
      backgroundColor: '#FFAE52',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    modalButtonText: {
      color: '#000000',
      textAlign: 'center',
    },
    modalCloseButton: {
      backgroundColor: '#eee',
      padding: 10,
      borderRadius: 5,
    },
    modalCloseButtonText: {
      color: '#888',
      textAlign: 'center',
    },
  };

  export default styles;

import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ECEFF1',
    margin: 5,
   height: Dimensions.get('window').height / 3,
   width: Dimensions.get('window').width / 2.15,
   justifyContent: 'flex-end',
   padding: 3.5,
   borderRadius: 10,
   

  },
  image: {
    borderRadius: 10,
    resizeMode: 'contain'
    
  },
  productTitle:{
    fontWeight: 'bold'
  },
  productPrice: {},
  isStock: {
    color: 'red'
  }
  
});
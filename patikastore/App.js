import React from 'react';
import {SafeAreaView, FlatList, TextInput, StyleSheet, Text} from 'react-native';
import data from './src/data.json'
import ShopCard from './src/components/ShopCard/index'

function App() {
  const renderShop = ({item}) => <ShopCard product = {item} />;
  return(
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.appTitle}>PATIKASTORE</Text>
     

      <FlatList
        ListHeaderComponent={() => <TextInput style = {styles.textBox} placeholder='Ara...' />}
        //yukarıdaki satır önemli
        data={data}
        renderItem={renderShop}
        numColumns = {2}
      />

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
  },
  appTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
    
  },
  textBox: {
    margin:15,
    backgroundColor: '#eceff1',
    padding: 15,
    borderRadius: 10
  }
});
export default App;
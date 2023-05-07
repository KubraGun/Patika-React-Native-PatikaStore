import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ShopCard.style';

const ShopCard = ({product}) => {
  return(
    <View style = {styles.container}>
      <Image
         style = {styles.image}
         source={{uri: product.imgURL}}
     />

      <Text style={styles.productTitle}>
        {product.title}
      </Text>

      <Text style = {styles.productPrice}>
        {product.price}
      </Text>

      <Text style = {styles.isStock}>
        {product.inStock ?  "" : "STOKTA YOK"}
      </Text>
    </View>
  );

}

export default ShopCard;
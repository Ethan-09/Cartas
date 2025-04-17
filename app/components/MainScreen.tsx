import React from 'react';
import {Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    titleImage: {
        width: 100,

    },

  });
  
  const localImage = require('../assets/cartiatas.png');

export const MainScreen = () =>{

    return(
        <div>
            <Image
            style={styles.titleImage}
            source={localImage}
            />
            <h1></h1>
        </div>
    )

}
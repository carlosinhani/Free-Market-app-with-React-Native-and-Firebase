import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import logo from '../../../assets/logo.png';
import Button from '../../components/Button';

export default function Home(){
  return( 
      <View style={styles.container}>
          <Image source={logo} />
          <Button style='outline'><Text>Aperte</Text></Button>
          <Button><Text>Aperte</Text></Button>
      </View>
    );
}


import React,{useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import logo from '../../../assets/logo.png';
import Button from '../../components/Button';

export default function Signup(){

  const [user,setUser] = useState()
  const [user,setPass] = useState()
  

  return( 
      <View style={styles.container}>
          <Image source={logo} />
          <View style={styles.containerInput}>
          <TextInput
               name='user'
               keyboardType='email-address'
               autoCapitalize='none'
               placeholder='Email' 
               style={styles.input}
          />
          <TextInput
               name='user'
               keyboardType='email-address'
               autoCapitalize='none'
               placeholder='Email'
               style={styles.input} 
          />
          </View>
          <Button style='outline' onPress={false}>
            <Text style={styles.text_primary}>ENTRAR</Text>
          </Button>
      </View>
    );
}


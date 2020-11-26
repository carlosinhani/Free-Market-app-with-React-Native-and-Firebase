import React,{useState} from 'react';
import { View, Text, Image, TextInput, Alert } from 'react-native';
import styles from './styles';
import logo from '../../../assets/logo.png';
import Button from '../../components/Button';
import firebase from "../../services/firebase";

export default function Signup(){

  const [user,setUser] = useState()
  const [pass,setPass] = useState()
  
  async function handleSignup(){
      
    if(user, pass) {
      
      firebase.auth().createUserWithEmailAndPassword(user,pass)
              .then((response)=>{
                  Alert.alert('Ok', 'tudo certo')
              })
              .catch((erro)=>{
                 Alert.alert('Ops', 'não foi possivel criar seu cadastro')
              })   
    } else {
      Alert.alert('Erro', 'Preencher email e senha')
    }
  }

  return( 
      <View style={styles.container}>
          <Image source={logo} />
          <View style={styles.containerInput}>
          <TextInput
               name='user'
               keyboardType='email-address'
               autoCapitalize='none'
               placeholder='Email' 
               onChangeText={(text)=>{setUser(text)}}
               style={styles.input}
          />
          <TextInput
               name='user'
               keyboardType='email-address'
               autoCapitalize='none'
               secureTextEntry={true}
               onChangeText={(text)=>{setPass(text)}}
               placeholder='Senha'
               style={styles.input} 
          />
          </View>
          <Button style='outline' onPress={handleSignup}>
            <Text style={styles.text_primary}>ENTRAR</Text>
          </Button>
      </View>
    );
}


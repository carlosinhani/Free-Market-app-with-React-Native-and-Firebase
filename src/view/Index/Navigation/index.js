import React from 'react';
import { View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Main from "../Main";
import List from "../List";
import styles from './styles';


const Stack = createStackNavigator()

const SearchBarHeader = () => {
     return (
          <View style={styles.input_search}>    
             <FontAwesome5 
                name= "search-dollar"
                size={22}
                color="#C4C4C4"
                style={{ marginRight: 5 }}
             />
             <TextInput
                  placeholder="Buscar no Mercado Livre"
             />
          </View> 
     );
};

const optionsHeader = ({ navigation }) => ({
     // title: 'Mercado Livre',
     headerStyle: {
         backgroundColor: "#ffe600",
         elevation: 0,
     },
     headerTintColor: '#000',
     headerTitle:() => (<SearchBarHeader />),
     headerLeft:() => (
         <TouchableOpacity
               style={{ marginLeft: 10 }}
               onPress={() => navigation.toggleDrawer()}
               title='Info'
         >
               <MaterialCommunityIcons name="format-align-left" size={24} color="#000" />
         </TouchableOpacity>
     ),
     headerRight: () => (
          <TouchableOpacity
               style={{ marginRight: 10}}
               onPress={() => Alert.alert("Ops", "O Carrinho ainda está vazio")}
               title='Info'
          >
               <Feather name="shopping-cart" size={24} color="#000" />
          </TouchableOpacity>
     ),
     headerTitleContainerStyle: {
          flex: 1,
     },
 });

export default function Navigation(){
    return (
       <Stack.Navigator>
            <Stack.Screen 
                 component={Main}
                 name="Main"
                 options={optionsHeader}
            />
            <Stack.Screen 
                 component={List}
                 name="List"
                 options={optionsHeader}
            />
       </Stack.Navigator>
    );
}

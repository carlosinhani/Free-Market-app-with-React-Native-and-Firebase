import React from 'react';
import { View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../Main";

const Stack = createStackNavigator()

export default function Navigation(){
    return (
       <Stack.Navigator>
            <Stack.Screen 
                 component={Main}
                 name="Main"
            />
       </Stack.Navigator>
    );
}

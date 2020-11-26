import React from 'react';
import { View, Image, Alert, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { FontAwesome } from '@expo/vector-icons';
import styles from "./styles";
import Navigation from "./Navigation";

const Drawer = createDrawerNavigator();

const HeaderDrawer = () =>{
  return(
     <View>
         <View>
            <Text>Olá</Text>
         </View>
         <View>
            <Text>Mercado Pago</Text>
         </View>
     </View>
  )
}

const DrawerContent = ({ navigation }) => {
    const listMenuDrawer = [
      {
          id: 1,
          name: "Home",
          action: "Home",
          icon: <FontAwesome name="home" size={24} color="#000" />
      },
      {
        id: 2,
        name: "Procurar",
        action: "List",
        icon: <FontAwesome name="search-plus" size={24} color="#000" />
    },
  ]

  return (
     <View>
        <HeaderDrawer />
        <View>
           <DrawerContentScrollView>
                  {listMenuDrawer.map((menu)=>(
                      <DrawerItem
                      label={menu.name}
                      key={menu.id}
                      icon={()=>menu.icon}
                      onPress={()=>navigation.navigate(menu.action)}
                      />
                  ))}
           </DrawerContentScrollView>
        </View>
     </View>
  )
}

export default function Index(){
  return (
      <Drawer.Navigator drawerContent={DrawerContent}>
           <Drawer.Screen
              name="Navigation"
              component={Navigation}
           />
      </Drawer.Navigator>
  );
}
 

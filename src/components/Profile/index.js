import React from 'react';
import { View, Image} from 'react-native';
import styles from './styles';

export default function Profile(){
  return( 
      <View >
          <Image style={styles.user_profile}
           source={{uri:"https://randomuser.me/api/portraits/women/21.jpg"}}
           />
      </View> 
  );
}


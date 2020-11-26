import React from 'react';
import styles from './styles';
import { 
     View,
     Text, 
     Image, 
     TouchableOpacity, 
     FlatList, 
     SafeAreaView 
    } from 'react-native';


function Item({ item }) {
    return (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("InfoProduct")}
        >
            <Image style={styles.picture} source={{ uri: item.picture }} />
            <View style={styles.title}>
                <Text style={styles.item_title}>
                    {item.name}
                </Text>
                <Text style={styles.item_price}>
                    R$ {item.price.toFixed(2)}
                </Text>
                <Text style={styles.item_subdivision}>
                    Parcelado em 12 x <Text style={styles.item_subdivision_detach}>
                        R${(item.price / 12).toFixed(2)}
                    </Text>
                </Text>
                <Text>
                    {item.condition}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const listProduct = [
    {
        id: '1',
        name: 'TV',
        price: 1250.27,
        condition: 'Novo'
    },
    {
        id: '2',
        name: 'PS5',
        price: 4500.00,
        condition: 'Novo'
    },
    {
        id: '3',
        name: 'NOTEBOOK',
        price: 3000.53,
        condition: 'Novo'
    },
    {
        id: '4',
        name: 'CELULAR LG ',
        price: 2100.58,
        condition: 'Novo'
    },
]

export default function List(){
    return (
        <>
            <Text style={styles.text_results}>
                Produtos encontrados: {listProduct.length}
            </Text>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={listProduct}
                    renderItem={({ item }) => (
                        <Item
                            item={item}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </>
    );
}

 
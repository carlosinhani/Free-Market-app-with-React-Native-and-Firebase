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
        id: '2',
        name: 'PS5',
        price: 4500.00,
        condition: 'Novo',
        picture:"https://www.citypng.com/public/uploads/preview/-11591925787cggjhepdvq.png"
        
        // picture: "https://www.casasbahia-imagens.com.br/Informatica/Notebook/55006647/1312426042/macbook-air-apple-core-i5-8gb-512gb-ssd-tela-retina-13-3-macos-mvh22bz-a-cinza-espacial-55006647.jpg"
    },
    {
        id: '1',
        name: 'Smart TV Lg 43',
        price: 2000.00,
        condition: 'Novo',
        picture: "https://mytechshop.lojavirtualfc.com.br/lojas/00035189/prod/ttec017d1.png"
    },
    {
        id: '3',
        name: 'X-Box series X',
        price: 3990.90,
        condition: 'Novo',
        picture: "https://imagens.canaltech.com.br/produto/1584982530-7573-principal-m.png"
    },
    {
        id: '4',
        name: 'ASUS VivoBook',
        price: 3200.50,
        condition: 'Novo',
        picture: "https://img.vigiadepreco.com.br/3e/27c/d326/42a1a/3e27cd32642a1a8c602f5e8627a3da6916c1624b7aac1c97947a2eda4a9a7ec9.jpg"
    },
    {
        id: '5',
        name: 'GOD of WAR PS4',
        price: 150.00,
        condition: 'Novo',
        picture: "http://lojasaraiva.vteximg.com.br/arquivos/ids/3966796/1004717197.jpg?v=637048670780800000"
    }    

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

 
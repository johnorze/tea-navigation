import React from 'react';
import {View, Text, StyleSheet, Linking, ImageBackground, TouchableOpacity} from 'react-native'
import Header from '../components/Header'
import TeaButton from '../components/TeaButton'

const AboutScreen = ({navigation}) => (
    <View style={styles.appContainer}>
    <ImageBackground source={require('../assets/teaphoto2.jpg')} style={{width:'100%', height:'100%'}}>
    
    <Header title="In Search of Lost Tea Timer" />
    <TouchableOpacity style={styles.containerStyle} onPress={() => navigation.navigate('Home')}>
        <View style={styles.aboutStyle}>
        <View style={{padding: 10, justifyContent: 'center', backgroundColor: '#fff', opacity: .6, margin: 15}}>
            <Text style={styles.aboutStyle}>A free, simple tea timer built with React Native by John Orzechowski.</Text>
            <Text style={styles.linkStyle} onPress={() => Linking.openURL('https://github.com/johnorze/tea-navigation')}>https://github.com/johnorze/tea-navigation</Text>
            <Text style={styles.linkStyle} onPress={() => Linking.openURL('https://www.vecteezy.com/free-vector/teapot')}>Teapot Vectors by Vecteezy</Text> 
            <Text style={styles.aboutStyle}> Photo by 五玄土 ORIENTO on Unsplash </Text>
 
        </View>
        <TeaButton tea="Go Back" onPress={() => navigation.navigate('Home')} />
    </View>
    </TouchableOpacity>
    </ImageBackground>

    </View>
)

const styles = StyleSheet.create({
    containerStyle: {
        justifyContent: 'center',
        flex: 1,
    },
    aboutStyle: {
        padding: 2,
        fontSize: 18,
        textAlign: 'center',
    },
    linkStyle: {
        padding: 2,
        fontSize: 18,
        textAlign: 'center',
        color: 'blue',
        textDecorationLine: 'underline',
    },
    appContainer: {
        paddingTop: 15,
    },
})

export default AboutScreen; 
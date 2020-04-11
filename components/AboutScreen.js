import React from 'react';
import {View, Text, StyleSheet, Linking, ImageBackground} from 'react-native'
import Header from './Header'

const AboutScreen = () => (
    <View style={styles.appContainer}>
    <ImageBackground source={require('../assets/teaphoto.jpg')} style={{width:'100%', height:'100%'}}>
    
    <Header title="In Search of Lost Tea Timer" />

    <View style={styles.containerStyle}>
        <Text style={styles.aboutStyle}>A free, simple tea timer built by John Orzechowski in React Native.</Text>
        <Text style={styles.linkStyle} onPress={() => Linking.openURL('https://github.com/johnorze/teatimer')}>https://github.com/johnorze/teatimer</Text>
        <Text style={styles.linkStyle} onPress={() => Linking.openURL('https://www.vecteezy.com/free-vector/teapot')}>Teapot Vectors by Vecteezy</Text> 
    </View>
    </ImageBackground>
    </View>
)

const styles = StyleSheet.create({
    containerStyle: {
        justifyContent: 'center',
        flex: 1,
    },
    aboutStyle: {
        padding: 5,
        paddingTop: 15,
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },
    linkStyle: {
        padding: 5,
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
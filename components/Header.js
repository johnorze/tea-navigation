import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const Header = props => (
    <View>
    <Text style={styles.headerStyle}>{props.title}</Text>
    </View>
);

const styles = StyleSheet.create({
  headerStyle: {
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#FFF',
    opacity: .8
    },
})

export default Header; 
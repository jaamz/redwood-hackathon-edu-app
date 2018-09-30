import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const Header = props => {

    return (
        <View>
            <View style={styles.container}>
                <Image
                style={styles.logoStyle}
                source={require('../images/studybuddieslogo.png')}
                />
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#2eeadb',
        paddingTop:35,
        paddingBottom:20,

    },
    font: {
        fontWeight: 'bold',
        fontSize:18,
        color:'white'

    },
    logoStyle: {
        width: 220,
        height: 30
    }
})
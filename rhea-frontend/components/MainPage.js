import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/header';
import { connect } from 'react-redux';

export default class MainPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <Text>Welcome To Study Buddies Mobile</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/header';
import { connect } from 'react-redux';

class MainPage extends Component {
    state={}

    



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



const mapDispatchToProps = dispatch => ({

})

export default connect(null, mapDispatchToProps)(MainPage);
// connect map state
// componentdidmount
// connect mapdispatch
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { getCardSetById } from '../redux/actions';

class Details extends Component {
    state = {  

    }

    componentDidMount() {
        this.props.getCardSetById("5bae8ef3b93b002f1e577c90")
    }

    render() { 
        return (  
            <View>
                <View>
                    <FlatList
                    data={this.props.selectedCardSet && this.props.selectedCardSet}
                    keyExtractor={(cards, index) => index + ''}
                    renderItem={({ item }) =>
                    <View>
                    <Text>{item.setname}</Text>
                    <Text>{item.description}</Text> 
                    <Text>{item.cards}</Text>
                    </View> }
                    />
                </View>
            </View>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    getCardSetById: (id) => dispatch(getCardSetById(id))
})

const mapStateToProps = state => ({
    selectedCardSet: state.selectedCardSet
})

export default connect(mapStateToProps, mapDispatchToProps)(Details);
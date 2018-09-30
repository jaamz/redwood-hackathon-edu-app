import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createCardSet } from '../redux/actions';
import { connect } from 'react-redux';
import Header from './header';

class Create extends Component {
    state = {
        setname: '',
        description: '',
        term: '',
        definition: '',
        cards: []
    }

    submitSet = () => {
        // console.log(this.state)
        let newCard = {term: this.state.term, definition: this.state.definition}
        console.log('new card', newCard)
        this.setState({
            cards: [...this.state.cards, newCard]
        }, () =>  {
            console.log('new state', this.state)
            this.props.createCardSet(this.state)
            this.setState({
                setname: '',
                description: '',
                term: '',
                definition: '',
                cards: []
            })});
    }


    render() {
        let { textInputContainer } = styles
        return (
            <View>
             <Header />
                <View style={textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        value={this.state.setname}
                        onChangeText={setname => { this.setState({ setname }) }}
                        placeholder='Enter Set Name Here...'
                    />
                    <TextInput
                        style={styles.textInput}
                        value={this.state.description}
                        onChangeText={description => { this.setState({ description }) }}
                        placeholder='Enter Description Here...'
                    />
                    <TextInput
                        style={styles.textInput}
                        value={this.state.term}
                        onChangeText={term => { this.setState({ term: term }) }}
                        placeholder='Enter Card Term Here...'
                    />
                    <TextInput
                        style={styles.textInput}
                        value={this.state.definition}
                        onChangeText={definition => { this.setState({ definition: definition}) }}
                        placeholder='Enter Card Definition Here...'
                    />

                </View>

                <TouchableOpacity
                    onPress={this.submitSet}>
                    style={styles.buttonStyle}
                    <Text>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInputContainer: {
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
        margin: 10
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        height: 50,
    },
    buttonStyle: {
        borderColor: 'black',
        borderWidth:2
    }
})

const mapDispatchToProps = dispatch => ({
    createCardSet: (card) => dispatch(createCardSet(card))
})

export default connect(null, mapDispatchToProps)(Create);


// local state

// when card set is createtd
// pass in local state
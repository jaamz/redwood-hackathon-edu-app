import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import Header from '../components/header';
import { connect } from 'react-redux';
import { getAllCardSets } from '../redux/actions';

const {width, height} = Dimensions.get("screen")


class MainPage extends Component {
    state={}

    componentDidMount() {
        this.props.getAllCardSets()
    }

    render() {
        console.log(this.props.flashCards)
        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.listContainer}>
                    <FlatList 
                    data={this.props.flashCards}
                    keyExtractor={(cards,index) => index + ''}
                    renderItem={({ item }) => 
                        <TouchableOpacity
                        style={styles.cardBox}>
                            <Text>
                                { item.setname }
                            </Text>
                        </TouchableOpacity>}
                        />
                </View>
            </View>








        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        alignItems: 'center'
    },
    cardBox: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        height: 200,
        width: width - 50,
        marginLeft: 20,
        marginRight: 20,
        
        
        
    }
});



const mapDispatchToProps = dispatch => ({
    getAllCardSets: () => dispatch(getAllCardSets())
})

const mapStateToProps = state => ({
    flashCards: state.flashCardSets
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
// connect map state
// componentdidmount
// connect mapdispatch
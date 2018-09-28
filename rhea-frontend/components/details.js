import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { getCardSetById } from '../redux/actions';

const {width, height} = Dimensions.get("screen")

class Details extends Component {
    state = {  

    }
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('detailTitle', 'Detail'),
        }
      };

    componentDidMount() {
        // this.props.getCardSetById("5bae8ef3b93b002f1e577c90")
    }

    render() { 
        let { selectedCardSet, isDataLoading } = this.props;
        return (  
            <View>
                <View>
                    { !isDataLoading ? 
                    <FlatList
                    data={ selectedCardSet.cards && selectedCardSet.cards }
                    keyExtractor={(cards, index) => index + ''}
                    renderItem={({ item }) =>
                    <View
                    style={styles.cardBox}>
                    <Text>{item.term}</Text>
                    <Text>{item.definition}</Text>
                    </View> }
                    />
                    :<Text>Loading...</Text>
                    }
                </View>
            </View>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    getCardSetById: (id) => dispatch(getCardSetById(id))
})

const mapStateToProps = state => ({
    selectedCardSet: state.selectedCardSet,
    isDataLoading: state.isDataLoading
})



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
})
        

export default connect(mapStateToProps, mapDispatchToProps)(Details);



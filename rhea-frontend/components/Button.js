import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { object, func, string } from 'prop-types';

const Button = props => {
    return (
        <View>
            <TouchableOpacity style={props.buttonStyle} onPress={props.buttonPressed}>
                <Text style={props.textStyle}> {props.text} </Text>
            </TouchableOpacity>
        </View>
    );
};

Button.propTypes = {
    buttonStyle: object,
    buttonPressed: func,
    textStyle: object,
    text: string
};

export default Button;
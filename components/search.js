import React from 'react';
import { TextInput } from 'react-native';

export default class Home extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            city: "Montpellier"
        }
    }

    setCity (city) {
        this.setState({city})
    }
    
    render () {
        return (
            <TextInput 
                underlineColorAndroid="transparent"
                onChangeText={(text) => this.setCity(text)}
                style={{height: 40, borderColor: 'gray', borderWidth: 1,}}
                value={this.state.city}
            />
        )
    }
}
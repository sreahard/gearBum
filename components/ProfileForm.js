import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  TextInput,
  AlertIOS,
  Image,
} from 'react-native';
import formStyles from '../CSS/FormStyle';
import homeStyles from '../CSS/HomeStyle';
import {serverUrl} from '../constants/serverConstants';


class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      username: '',
      bio: '',
      picture: '',
    };
  }

  updateUser(){
    var self = this
    fetch(serverUrl +'/api/v1/updateUser/' + this.state.email, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email : self.state.email,
        password : self.state.password,
        username: self.state.username,
        bio: self.state.bio,
        picture: self.state.picture
      })
    }).then(function(response) {
      return response.json()
    }).then(() => this.setState({toggleDisplay: !this.state.toggleDisplay})
    ).catch(function(ex) {
      console.log("Profile Not Updated")
      console.log('parsing failed', ex)
    })
  }

  render() {
    return (
      <View>
        <View style={ formStyles.toggleContainer }>
          <TextInput
            style={ formStyles.inputBar }
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            placeholder='Password'
            secureTextEntry={true}
            style={ formStyles.inputBar }
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <TextInput
            placeholder='Username'
            style={ formStyles.inputBar }
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
          />
          <TextInput
            placeholder="Bio"
            style={ formStyles.inputBar }
            onChangeText={(bio) => this.setState({bio})}
            value={this.state.bio}
          />
        </View>
        <TouchableHighlight onPress={ () => this.updateUser()} style={ formStyles.loginBtn }>
            <Text style={ homeStyles.textWhite }>
              Update Profile
            </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
module.exports = ProfileForm
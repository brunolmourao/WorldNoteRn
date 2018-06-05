import React from 'react'
import { StyleSheet, Text, TextInput, View, Button,TouchableHighlight,Image } from 'react-native'
import firebase from 'react-native-firebase'

export default class SignUp extends React.Component {
  state = { email: '', password: '',checkpassword: '' ,errorMessage: null }

handleSignUp = () => {
  if(this.state.password == this.state.checkpassword){
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => this.props.navigation.navigate('Main'))
    .catch(error => this.setState({ errorMessage: error.message }))
  console.log('handleSignUp')
  }else{
    alert('Senhas não conferem');
  }
}
handleClick = () =>{
    //alert('Button clicked');
    this.props.navigation.navigate('Login');
}

render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.onTaskCompletion}>
            <Image
            style={{width: 50, height: 50}}
            source={require('.//res//img_102074.png')}
           />
          </TouchableHighlight>
        <Text>Criar Conta</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={checkpassword => this.setState({ checkpassword })}
          value={this.state.checkpassword}
        />
        <Button title="Criar Conta" onPress={this.handleSignUp} />
        <Button
          title="Já possui uma conta?"
          onPress={this.handleClick}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
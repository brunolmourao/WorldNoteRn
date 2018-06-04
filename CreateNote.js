import React from 'react'
import { StyleSheet, Platform, Image, Text, View,Button,TextInput } from 'react-native'
import firebase from 'react-native-firebase'
export default class CreateNote extends React.Component { 
  constructor(props){
    super(props);
    this.state = { currentUser: null,title: "",note: "",date: "",location: "", errorMessage: null };
  } 
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
    }
  onClickAddNote =() =>{
      firebase.database().ref('notes').push({
        title: this.state.title,
        content: this.state.note,
        date: this.state.date,
        location: this.state.location,
        author: this.state.currentUser.email,
      }
    )
    this.props.navigation.navigate('Main');
  }
  startPlacePicker = () =>{
    this.props.navigation.navigate('PlacePicker');
  }
render() {
return (
      <View style={styles.container}>
        <Text textAlign = "center">
          Adicionar Nota
        </Text>
        <Text>
            Insira o Título da Nota:
        </Text>
        <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Insira o titulo da nota"
            onChangeText={title => this.setState({ title })}
            value={this.state.title}
        />
        <Text>
            Insira a Nota:
        </Text>
        <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Insira o conteudo da nota"
            onChangeText={note => this.setState({ note })}
            value={this.state.note}
        />
        <Text>
            Insira a Data da Nota:
        </Text>
        <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Insira a Data da nota"
            onChangeText={date => this.setState({ date })}
            value={this.state.date}
        />
        <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Insira o Lugar"
            onChangeText={location => this.setState({ location })}
            value={this.state.location}
        />
        <Button
          title = "Adicionar Nota"
          onPress = {this.onClickAddNote}
        />
        <Button
          title = "Voltar"
          onPress = {() => this.props.navigation.navigate('Main')}  
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center'
  }
})

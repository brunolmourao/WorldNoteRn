import React from 'react'
import { StyleSheet, Platform, Image, Text, View,Button,TextInput } from 'react-native'
import firebase from 'react-native-firebase'
export default class EditNote extends React.Component { 
  constructor(props){
    super(props);
    this.state = { currentUser: null,title: "",note: "",date: "",location: "", errorMessage: null };
  } 
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
    }
  onClickEditNote =() =>{
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
          Editar Nota
        </Text>
        <Text>
            Modifique o Título da Nota:
        </Text>
        <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Insira o titulo da nota"
            onChangeText={title => this.setState({ title })}
            value={this.state.title}
        />
        <Text>
            Modifique a Nota:
        </Text>
        <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Insira o conteudo da nota"
            onChangeText={note => this.setState({ note })}
            value={this.state.note}
        />
        <Text>
            Modifique a Data da Nota:
        </Text>
        <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Insira a Data da nota"
            onChangeText={date => this.setState({ date })}
            value={this.state.date}
        />
        <Text>
          Modifique o local da Nota:
        </Text>  
        <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Insira o Lugar"
            onChangeText={location => this.setState({ location })}
            value={this.state.location}
        />
        <Button
          title = "Editar Nota"
          onPress = {this.onClickEditNote}
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

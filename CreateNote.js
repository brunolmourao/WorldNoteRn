import React from 'react'
import { StyleSheet, Platform, Image, Text, View,Button,TextInput } from 'react-native'
import firebase from 'react-native-firebase'
export default class CreateNote extends React.Component {  
  state = { currentUser: null,title: '',note: '',date: '', errorMessage: null }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
    }
  onClickAddNote(){
      firebase.database().ref('testenota').set({
        titulo: this.state.title,
        conteudo: this.state.note,
        data: this.state.date,
        user: currentUser.email,
      }
    ).then(() => this.props.navigation.navigate('Main'))
    .catch(error => this.setState({ errorMessage: error.message }))
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
            placeholder="Titulo"
            onChangeText={title => this.setState({ title })}
            value={this.state.title}
        />
        <Text>
            Insira a Nota:
        </Text>
        <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Nota"
            onChangeText={note => this.setState({ note })}
            value={this.state.note}
        />
        <Text>
            Insira a Data da Nota:
        </Text>
        <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Data"
            onChangeText={date => this.setState({ date })}
            value={this.state.date}
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

// Main.js

import React from 'react'
import { StyleSheet, Platform, Image, Text, View,Button,ToolbarAndroid,ListView } from 'react-native'
import firebase from 'react-native-firebase'
import ListItem from './/ListItem'
import styles from './/styles'
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.tasksRef = firebase.database().ref('notes');
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: dataSource
    };
  }
  state = { currentUser: null }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
    this.listenForTasks(this.tasksRef);
}
_renderItem(task) {
  // a method for building each list item
  const onTaskCompletion = () => {
    // removes the item from the list
    this.tasksRef.child(task._key).remove()
  };
  return (
    <ListItem task={task} onTaskCompletion={onTaskCompletion} />
  );
}
  onClickAddNote = () => {
      //alert('Button clicked');
      this.props.navigation.navigate('CreateNote');
  }
  onClickLogOff(){
    firebase.auth().signOut()
    .then(() => this.props.navigation.navigate('Loading'))
    .catch(error => this.setState({ errorMessage: error.message }))
  }
  listenForTasks(tasksRef) {
    tasksRef.on('value', (dataSnapshot) => {
      var tasks = [];
      dataSnapshot.forEach((child) => {
        if(this.state.currentUser.email == child.val().author){
          tasks.push({
            name: child.val().title,
            content: child.val().content,
            date:child.val().date,
            location:child.val().location,
            _key: child.key
          });
        }
      });
  
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(tasks)
      });
    });
  }  
render() {
    const { currentUser } = this.state

return (
      <View style={styles.container}>
        <Text>
          Bem Vindo:  {currentUser && currentUser.email}!
        </Text>
        <ToolbarAndroid
          style={styles.navbar}
          title="Lista de Notas" />
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          style={styles.listView}/>
        <Button
          title = "Adicionar Nota"
          onPress = {this.onClickAddNote}
        />
        <Button
          title = "Sair"
          onPress = {this.onClickLogOff}
        />
      </View>
    )
  }
}

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center'
  //}
//})
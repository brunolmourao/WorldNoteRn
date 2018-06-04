import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';
import styles from './/styles.js';
  
  class ListItem extends Component {
    render() {
      return (
        <View style={styles.listItem}>
          <Text style={styles.listItemTitle}>{this.props.task.name}</Text>
          <Text style ={styles.listItemContent}>{this.props.task.content}</Text>
          <Text style ={styles.listItemDate}>{this.props.task.date}</Text>
          <Text style ={styles.listItemLocation}>{this.props.task.location}</Text>
          <Button title = "Deletar Nota" onPress={this.props.onTaskCompletion}/>
        </View>
      );
    }
  }
  
  module.exports = ListItem;
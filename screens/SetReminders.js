import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,KeyboardAvoidingView,ToastAndroid, TextInput} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            date:'',
            details: '',
        }
    }

    submitReminder = ()=>{
        db.collection("users").add({
            email: this.state.email,
            date: this.state.date,
            details: this.state.details,
            //date: firebase.firestore.FieldValue.serverTimestamp().now().toDate()
        })
        this.setState({
            email: '',
            date: '',
            details: ''
        })
        ToastAndroid.show('Your reminder have been added', ToastAndroid.SHORT)
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Header
                    backgroundColor = {'lightblue'}
                    centerComponent = {{
                        text : 'Reminder App',
                        style : { color: 'black', fontSize: 25}
                    }}
                />
                <TextInput
                    placeholder="Your E-Mail"
                    onChangeText= {(text)=>{
                        this.setState({
                            email: text
                        })
                    }}
                    value={this.state.email}
                    style={styles.email}/>
                <TextInput
                    placeholder="Time and Date"
                    onChangeText={(text) => {
                        this.setState({
                            date: text
                        })
                    }}
                    value={this.state.time}
                    style={styles.email} />
                <TextInput
                    placeholder="Details"
                    onChangeText= {(text)=>{
                        this.setState({
                            details: text
                        })
                    }}
                    value={this.state.details}
                    style={styles.reminderText}
                    multiline={true}/>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.submitReminder}
                    >
                    <Text style={styles.buttonText}>Add Reminder</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  email:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      padding: 10,
      margin:10
  },
  date: {
      height: 40,
      borderWidth: 2,
      padding: 10,
      margin:10
  },
  reminderText: {
      height: 250,
      borderWidth: 2,
      margin: 10,
      padding:10
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'lightblue',
      width: 120,
      height: 40
  },
  buttonText: {
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold'
  }
});
import React from 'react';
import { StyleSheet, Text, View ,FlatList,TouchableOpacity, ScrollView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Header} from 'react-native-elements';
import db from '../config';

export default class ReadStoryScreen extends React.Component {
  constructor(){
    super();
    this.state ={
      allReminders:[],
      dataSource:[],
      search : ''
    }
  }
  componentDidMount(){
    this.retriveReminders()
  }

  updateSearch = search => {
    this.setState({ search });
  };


  retriveReminders=()=>{
    try {
      var allReminders= []
      var stories = db.collection("users")
        .get().then((querySnapshot)=> {
          querySnapshot.forEach((doc)=> {
              // doc.data() is never undefined for query doc snapshots
              
              allReminders.push(doc.data())
              console.log('this are the reminders',allReminders)
          })
          this.setState({allReminders})
        })
    }
    catch (error) {
      console.log(error);
    }
  };


  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.state.allReminders.filter((item)=> {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }

    render(){
      return(
        <View style ={styles.container}>
          <Header
            backgroundColor={'lightblue'}
            centerComponent={{
              text: 'Reminder App',
              style: { color: 'black', fontSize: 25 }
            }}
          />
          <View styles ={{height:20,width:'100%'}}>
            
          </View>
          
          <FlatList
                data={this.state.allReminders}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                    <Text>  Email: {item.email}</Text>
                    <Text>  Date: {item.date}</Text>
                    <Text>  Details : {item.details}</Text>
                  </View>
                )}
            
            keyExtractor={(item, index) => index.toString()}
            />
        </View>  
      );      
    }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: 'blue',
    padding:10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  itemContainer: {
    height: 80,
    marginBottom: 10,
    marginTop:10,
    width:'95%',
    borderWidth: 2,
    borderColor: 'lightblue',
    justifyContent:'center',
    alignSelf: 'center',
  }
});
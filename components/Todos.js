import { StyleSheet, Text, ScrollView, SafeAreaView, View } from 'react-native'
import React from 'react'
import Todo from './Todo'

const Todos = ({todos, deleteTodo}) => {
  //Getting todays date
  const date = new Date().getDate()
  const month = new Date().getMonth()+1
  //Component mapping all Todos
  return (
    <View style={styles.container}>
      <Text style={styles.todoText}>Today {date}.{month}.</Text>
    <ScrollView style={styles.scrollview}>
      {todos.map(i => {
        return(<Todo task={i.task} key={i.id} deleteTodo={deleteTodo} id={i.id}/>)
      })}
    </ScrollView>
    </View>
  )
}

export default Todos
//styles for Todos
const styles = StyleSheet.create({
    container: {
        flex: 10,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 10,
    },
    todoText: {
      fontSize: 40,
      color: '#000',
      marginTop: 40,
    },

    scrollview: {
      width: '100%',
    }
})
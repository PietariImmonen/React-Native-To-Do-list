import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React from 'react'
import Todo from './Todo'

const Todos = ({todos, deleteTodo}) => {



  return (
    <View style={styles.container}>
      <Text style={styles.todoText}>TODOS:</Text>
    <ScrollView>
      {todos.map(i => {
        return(<Todo task={i.task} key={i.id} deleteTodo={deleteTodo} id={i.id}/>)
      })}
    </ScrollView>
    </View>
  )
}

export default Todos

const styles = StyleSheet.create({
    container: {
        flex: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    todoText: {
      fontSize: 40,
      color: '#FFF',
      marginTop: 40
    }
})
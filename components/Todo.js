import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Todo = ({task, deleteTodo, ids}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#FFF', marginRight: '10%', maxWidth: '80%'}} numberOfLines={5}>Task: {task}</Text>
      <TouchableOpacity style={styles.button} onPress={() => deleteTodo(ids)}>
          <Text style={{fontSize: 15}}>-</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Todo

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 'auto',
    marginBottom: 10,
    padding: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#363636',
    shadowColor: '#123',
    borderRadius: 10,
    shadowOffset: {
        width: 2,
        height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#8687E7',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
  },
})
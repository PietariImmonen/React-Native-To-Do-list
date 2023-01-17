import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Todo = ({task, deleteTodo, id}) => {

/*<TouchableOpacity style={styles.button} onPress={() => deleteTodo(id)}>
          <Text style={{fontSize: 15}}>-</Text>
      </TouchableOpacity>*/
  console.log(id)
  return (
    <View style={styles.container}>
      <Text style={{color: '#FFF', marginRight: '10%', maxWidth: '80%', fontSize: 20}} numberOfLines={5}>{task}</Text>
      <Ionicons name="md-checkmark-circle" size={32} color="white" onPress={() => deleteTodo(id)}/>
    </View>
  )
}

export default Todo

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 30,
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#060606',
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
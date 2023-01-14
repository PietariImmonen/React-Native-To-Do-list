import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const AddTodo = ({visible, setVisible}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)} >
          <Text style={{fontSize: 30}}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#8687E7',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '20%',
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
})
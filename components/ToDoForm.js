import { StyleSheet, Text, View, TextInput, Modal , Button, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight} from 'react-native'
import React from 'react'

const ToDoForm = ({task, setTask, visible, setVisible, addTodo}) => {

    const sendTodo = () => {
        addTodo()
        setVisible(false)
    }


  return (
    <View style={styles.container}>
        <Modal
            animationType='slide'
            visible={visible}
            transparent
        >
            <View style={styles.modalContainer} onPress={() => setVisible(false)}>
                <View style={{width: '80%', alignItems: 'flex-end', margin: 20}}><Text onPress={() => setVisible(false)} style={{color: '#FFF', fontSize: 40}}>X</Text></View>
                <View style={styles.modalBox}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTask}
                        value={task}
                    />
                    <View style={{marginTop: 10, backgroundColor: '#8687E7',}}>
                        <Button onPress={sendTodo} title='Add To-Do item!'/>
                    </View>
                </View>
                
                </View>

        </Modal>
        
    </View>
  )
}

export default ToDoForm

const styles = StyleSheet.create({
    container: {

    },
    input: {
        width: '90%',
        borderWidth: 1,
        padding: 8,
        borderRadius: 5,
        color: '#FFF',
        borderColor: '#FFF'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.74);',
    },
    sendButton: {
        marginTop: 50,
        backgroundColor: '#8687E7',
    },
    modalBox: {
        width: '80%',
        height: '20%',
        padding: 10,
        justifyContent: 'center',
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
    }

})
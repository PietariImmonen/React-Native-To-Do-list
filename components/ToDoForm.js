import { StyleSheet, Text, View, TextInput, Modal , Button, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons'; 

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
                <View style={styles.modalBox}>
                    <View style={{width: '100%', alignItems: 'center', marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Entypo name="cross" size={32} color="#060606" onPress={() => setVisible(false)}/>
                        <Text style={{fontSize: 18}}>Task</Text>
                        <Entypo name="cross" size={32} color="#F9F9F9"/>
                    </View>
                    <Text style={{fontSize: 32, marginBottom: 15}}>Add a task</Text>
                    <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{paddingRight: 10, fontSize: 18,}}>Name:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setTask}
                            value={task}
                        />
                    </View>
                    <View style={styles.sendingButton}>
                        <Text onPress={sendTodo} style={{color: 'white'}}>Add To-Do item!</Text>
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
        width: '80%',
        borderWidth: 2,
        padding: 8,
        borderRadius: 5,
        color: '#060606',
        borderColor: '#060606'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    sendButton: {
        marginTop: 50,
        backgroundColor: '#8687E7',
    },
    modalBox: {
        width: '100%',
        height: '40%',
        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#F9F9F9',
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
    sendingButton: {
        width: '100%',
        marginTop: 20,
        backgroundColor: '#060606',
        color: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
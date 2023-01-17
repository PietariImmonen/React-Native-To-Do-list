import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ToDoForm from './components/ToDoForm';
import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import {getTasks, postToBack, deleteTask} from './services/tasks'
import { useFonts } from 'expo-font'

export default function App() {
  const [task, setTask] = React.useState('')
  const [modalVisible, setModalVisible] = React.useState(false)
  const [tasks, setTasks] = React.useState([])

  //function used to get To-Dos from database
  const getAll = async () => {
    const data = await getTasks()
    setTasks(data)
  }

  React.useEffect(() => {getAll()}, [modalVisible])


  //used to add todo to database and to state
  const addTodo = async () => {
    if(task.length> 0) {
      await postToBack({task: task})
      getAll()
      setTask('')
    }
  }

  //Used for deleting todo from database and from state
  const deleteTodo =  (id) => {
    deleteTask(id)
    const newTasks = tasks.filter(i => i.id!==id)
    setTasks(newTasks)
  }
  //Creating main component
  return (
    <SafeAreaView style={styles.container}>
      <Todos todos={tasks} deleteTodo={deleteTodo}/>
      <ToDoForm visible={modalVisible} setVisible={setModalVisible} task={task} setTask={setTask} addTodo={addTodo}/>
      <AddTodo visible={modalVisible} setVisible={setModalVisible}/>
    </SafeAreaView>
  );
}
//Some Styles for the main container
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flex: 1,
  },
});

import { StyleSheet, Text, View } from 'react-native';
import ToDoForm from './components/ToDoForm';
import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import {getTasks, postToBack, deleteTask} from './services/tasks'

export default function App() {
  const [task, setTask] = React.useState('')
  const [modalVisible, setModalVisible] = React.useState(false)
  const [tasks, setTasks] = React.useState([])



  const getAll = async () => {
    const data = await getTasks()
    setTasks(data)
  }

  React.useEffect(() => {getAll()}, [tasks])

  const addTodo = async () => {
    postToBack({ids: Math.random().toString(), task: task})
    setTask('')
  }



  const deleteTodo =  (id) => {
     deleteTask(id)
  }


  return (
    <View style={styles.container}>
      <Todos todos={tasks} deleteTodo={deleteTodo}/>
      <ToDoForm visible={modalVisible} setVisible={setModalVisible} task={task} setTask={setTask} addTodo={addTodo}/>
      <AddTodo visible={modalVisible} setVisible={setModalVisible}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.74);',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flex: 1,
  },
});

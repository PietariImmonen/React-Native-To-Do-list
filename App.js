import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoForm from './components/ToDoForm';
import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

export default function App() {
  const [task, setTask] = React.useState('')
  const [modalVisible, setModalVisible] = React.useState(false)
  const [tasks, setTasks] = React.useState([])

  const addTodo = () => {
    setTasks([...tasks, {task: task, id: Math.random()}])
    setTask('')
  }

  const deleteTodo = (id) => {
    setTasks(tasks.filter(todo => todo.id !== id))
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

import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AddTodo from './components/todo/AddTodo';

import { useState } from 'react';
import ListTodo from './components/todo/ListTodo';

function App() {

  const [todo, setTodo] = useState({
    name: "",
    isComplete: false
  });

  return (
    <>
    <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <ListTodo setTodo={setTodo} />
    <Footer />
    </>
  );
}

export default App;

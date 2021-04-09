import React, {createContext, useContext, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const TodoContext = createContext();
const TodoContextProvider = ({children})=> {
    const [todos, setTodos] = useState([])


    const onTodoCreate = (newTodo) => {
        if (!newTodo || !newTodo.title || !newTodo.description){
            console.error(`WRONG`)
            return
        }
        setTodos([newTodo,...todos])
    }

    return (
        <TodoContext.Provider value={{todos, onTodoCreate}}>
            {children}
        </TodoContext.Provider>
    )
}

const TodoItem = ({todo})=>{
    return (
        <div>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
        </div>
    )
}

const TodoList = () => {
const {todos} = useContext(TodoContext)

    return (
      <div>
          {todos.map(el => <TodoItem key={el.title + el.description} todo={el}/>)}
      </div>
    )
}

const AddTodo = () => {
    const [todoValues, setTodoValues] = useState({title:'', description:''})

    const {todos, onTodoCreate} = useContext(TodoContext)
    console.log(todos)

    const onTodoChange = ({target: {name, value}})=> setTodoValues({...todoValues, [name]: value})

    const onCreate = ()=>{
        onTodoCreate(todoValues)
        setTodoValues({title:'', description:''})
    }
    return (
        <div>
            <input value={todoValues.title} onChange={onTodoChange} type="text" name="title" placeholder="todo title"/>
            <input value={todoValues.description} onChange={onTodoChange} type={'text'} name={'description'} placeholder={'todo description'}/>
            <button onClick={onCreate}>add doto</button>
        </div>

    )
}

const Header = () => {
    return (
        <header>
            <Link to={"/"}>list</Link>
            <Link to={"/create-todo"}>add new </Link>
        </header>
    )
}

function App() {

    return (

            <TodoContextProvider>
        <div className="App">
            <Router>
                <Header/>
                <Switch>
                    <Route path={"/"} exact>
                        <TodoList/>
                    </Route>
                    <Route path={"/create-todo"}>
                        <AddTodo/>
                    </Route>
                </Switch>
            </Router>
        </div>
            </TodoContextProvider>
    );
}

export default App;

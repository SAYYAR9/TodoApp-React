import './TodoList.scss'
import react from 'react'
import { Fragment } from 'react'
import TodoListTitle from '../../components/TodoListTitle/TodoListTitle'
import Todo from '../../components/Todo/Todo'
 
function TodoList() {
    return(
        <Fragment>
            <TodoListTitle/>
            <div>
                <Todo completed={true}/>
            </div>

        </Fragment>
    )
}

export default TodoList
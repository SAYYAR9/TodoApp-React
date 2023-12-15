import './AddTodo.scss'
import { Fragment } from 'react'
import plus from '../../assets/plus.svg'

function AddTodo() {
    return(
        <Fragment>
            <input className='add-todo-input' type="text" placeholder='Elave etmek istediyiniz isi daxil edin' />
            <div className='add-todo-button'>
                <div>Criar</div>
                <img src={plus} alt="add" />
            </div>
        </Fragment>
    )
}

export default AddTodo
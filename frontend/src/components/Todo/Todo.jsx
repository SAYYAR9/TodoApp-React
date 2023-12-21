import CheckBox from '../UI/CheckBox/CheckBox'
import './Todo.scss'
import removeImage  from "../../assets/Trash.png";


function Todo({completed}) {
    return(
        <div className='Todo'>
            <div className='checkbox-div'>
            <CheckBox completed={completed} />
            </div>
            <div className={'content ' + (completed ? 'content-checked' : '')}>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </div>
            <div className="trash-div">
                <img src={removeImage} alt="remove" />
            </div>
        </div>
    )
}

export default Todo
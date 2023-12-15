import CheckBox from '../UI/CheckBox/CheckBox'
import './Todo.scss'
import removeImage  from "../../assets/Trash.png";


function Todo() {
    return(
        <div className='Todo'>
            <div className='checkbox-div'>
            <CheckBox/>
            </div>
            <div className="content content-checked ">
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </div>
            <div className="trash-div">
                <img src={removeImage} alt="remove" />
            </div>
        </div>
    )
}

export default Todo
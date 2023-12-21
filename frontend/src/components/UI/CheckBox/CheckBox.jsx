import './CheckBox.scss'
import checkedImage from '../../../assets/checked.png'

function CheckBox({completed}) {
    
    return (
        <div className={'CheckBox ' + (completed ? 'CheckBox-checked' : '')}>
            <img className='checked-icon' src={checkedImage} alt="checked"/>
        </div>
    )
}

export default CheckBox;

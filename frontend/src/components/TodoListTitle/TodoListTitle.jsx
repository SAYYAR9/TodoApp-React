import './TodoListTitle.scss'

function TodoListTitle() {
    return(
        <div className='TodoListTİtle'>
            <div className='total-todo'>
                <div className='text'>Umumi todolar</div>
                <div className='count'>5</div>
            </div>
            <div className='completed-todo'>
                <div className='text'>Tamamlanmis</div>
                <div className='count'>2 / 5</div>
            </div>
        </div>
    )
}

export default TodoListTitle
import './user.css'

const User = (props)=> {
    return (
        <div className='user'>
            {`${props.name} (${props.age} years old)`}
        </div>
    )
}

export default User
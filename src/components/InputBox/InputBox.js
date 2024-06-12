import './InputBox.css'

const InputBox = ({placeholder, type, ...props}) => {
    return (
        <input className="input-box" type={type} placeholder={placeholder} {...props}/>
    )
}

export {InputBox}
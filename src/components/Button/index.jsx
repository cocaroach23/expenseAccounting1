function Button(props) {
    const { title, handleClick, type } = props
    
    return(
        <button type={type} onClick={event => handleClick(event)} >
            {title}
        </button>
    )
}

export default Button
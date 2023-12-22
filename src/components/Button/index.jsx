function Button(props) {
    const { title, handleClick, type } = props
    
    return(
        <button type={type} onClick={event => handleClick(event)} className="px-5 py-3 text-white duration-150 bg-indigo-600 rounded-full hover:bg-indigo-500 active:bg-indigo-700" >
            {title}
        </button>
    )
}

export default Button
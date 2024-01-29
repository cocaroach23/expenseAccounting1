function Button(props) {
  const { title, handleClick, type } = props;

  return (
    <button
      type={type}
      onClick={(event) => handleClick(event)}
      className="px-5 py-3 w-36 mt-10 mx-auto text-white duration-150 bg-purple-800 rounded-full hover:bg-purple-500 active:bg-purple-700"
    >
      {title}
    </button>
  );
}

export default Button;

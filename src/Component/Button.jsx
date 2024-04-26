const Button = ({ onClick, ClassName, children }) => {
  //   JSON.stringify(children);
  return (
    <button
      onClick={onClick}
      className={"border border-black bg-slate-600 px-10" + "" + ClassName}
    >
      {/* {JSON.stringify(props)} */}
      {children}
    </button>
  );
};

export default Button;

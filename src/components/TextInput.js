const TextInput = ({ placeholder, className, ...rest }) => {
  return (
    <input
      className={`text-input ${className}`}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default TextInput;

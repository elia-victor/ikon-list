const Button = ({ label, id, onClick }) => {
  return (
    <>
      <button
        id={id}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};

export default Button;

const Button = ({ label, id, onClick }) => {
  return (
    <>
      <Button
        id={id}
        type="button"
        onClick={onClick}
      >
        {label}
      </Button>
    </>
  );
};

export default Button;

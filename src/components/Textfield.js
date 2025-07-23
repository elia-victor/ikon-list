const Textfield = ({ placeholder, id }) => {
  return (
    <>
      <input type="text" placeholder={placeholder} id={id} name={id} />
    </>
  );
};

export default Textfield;

const Textfield = ({ placeholder, id, value, onChange }) => {
  return (
    <>
      <input type="text" value={value} placeholder={placeholder} id={id} name={id} onChange={onChange} />
    </>
  );
};

export default Textfield;

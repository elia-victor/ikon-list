const Detail = ({ label, id, data, objKey }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h5>{label}</h5>
      <p>{data[id][objKey]}</p>
    </div>
  );
};

export default Detail;

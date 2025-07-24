import logo from './logo.svg';
import './App.css';
import Textfield from './components/Textfield';
import Button from './components/Button';
import Detail from './components/Detail';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { get_list } from './services/redux/actions/getList';

function App() {
  const listData = useSelector(state => state.list.value)
  const dispatch = useDispatch()
  const [searchVal, setSearchVal] = useState("");
  const [idDetail, setIdDetail] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const searchChange= (e) => {
    setSearchVal(e.target.value)
  };

  const fnSearch = () => {
    const results = listData.filter((datum) =>
      datum.title.toLowerCase().includes(searchVal.toLowerCase())
    );
    setFilteredData(results);
  };

  const clickDetail = (i) => {
    setIdDetail(i)
  }

  useEffect(() => {
    dispatch(get_list());
  }, [])

  return (
    <div className="App">
      {
        idDetail == null && listData && (
        <>
          <Textfield placeholder="Search" value={searchVal} id="textfieldSearch" onChange={searchChange} />
          <Button label="Search" id="btnSearch" onClick={() => fnSearch()} />
          <ul>
            {
              filteredData.length > 0 ? (
                  filteredData.map((datum, index) => (
                    <li
                      key={index}
                      style={{ textAlign: "left" }}
                      onClick={() => clickDetail(index)}
                    >
                      {`Id : ${datum.id} - Title : ${datum.title}`}
                    </li>
                  ))
              ) : (
                listData.map((datum, index) => (
                  <li
                    key={index}
                    style={{ textAlign: "left" }}
                    onClick={() => clickDetail(index)}
                  >
                    {`Id : ${datum.id} - Title : ${datum.title}`}
                  </li>
                ))
              )
            }
          </ul>
        </>
        )
      }
      {
        idDetail !== null && (
          <>
            <h3>Detail :</h3>
            <Detail label="User Id" objKey="userId" id={idDetail} data={searchVal !== "" ? filteredData : listData} />
            <Detail label="Id" objKey="id" id={idDetail} data={searchVal !== "" ? filteredData : listData} />
            <Detail label="Title" objKey="title" id={idDetail} data={searchVal !== "" ? filteredData : listData} />
            <Detail label="Body" objKey="body" id={idDetail} data={searchVal !== "" ? filteredData : listData} />
            <h4 onClick={() => setIdDetail(null)}>Back to list</h4>
          </>
        )
      }
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import Textfield from './components/Textfield';
import Button from './components/Button';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { get_list } from './services/redux/reducer';

function App() {
  const listData = useSelector(state => state.list.value)
  const dispatch = useDispatch()
  const [searchVal, setSearchVal] = useState("");
  const [idDetail, setIdDetail] = useState(0);

  const searchChange= (e) => {
    setSearchVal(e.value)
  };

  const fnSearch = () => {
    listData.filter((datum) => datum.title === searchVal);
  };

  const clickDetail = () => {
    setShowDetail(!showDetail)
  }

  useEffect(() => {
    dispatch(get_list);
  }, [])

  return (
    <div className="App">
      <div>
        <Textfield placeholder="Search" id="textfieldSearch" onChange={searchChange} />
        <Button label="Search" id="btnSearch" onClick={fnSearch} />
        <li>
        {listData.map((datum, index) => {
          <ol onClick={() => clickDetail(index)}>{`${datum.userId}-${datum.title}`}</ol>
        })}
        </li>
        Detail
        {
          
        }
      </div>
    </div>
  );
}

export default App;
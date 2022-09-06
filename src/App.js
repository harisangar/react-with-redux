
import './App.css';
import { useSelector,useDispatch } from "react-redux";
import {  bindActionCreators } from 'redux';
import { actionCreators } from "./state/index"

function App() {

  const account= useSelector((state)=>state.account);
  const dispatch=useDispatch();
  
  const{ depositeMoney,withdrawMoney }=bindActionCreators(actionCreators,dispatch);
  console.log(account);
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={()=>depositeMoney(2000)}>deposite</button>
      <button onClick={()=>withdrawMoney(1000)}>withdraw</button>
      
    </div>
  );
}

export default App;

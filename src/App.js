import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count=useSelector(state=>state.count)
  const dispatch=useDispatch()
  return (
    <div className="App">

     <>
     <button onClick={()=>{dispatch({type:"INCREMENT"})}}>+</button>
     {count}
     <button onClick={()=>{dispatch({type:"DECRIMENT"})}}>-</button>
     </>
    </div>
  );
 
}



export default App;

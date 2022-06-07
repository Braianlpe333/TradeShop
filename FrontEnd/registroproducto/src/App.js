import "./App.css";
import Formproduct from "./Componets/Form";


function App() {
  return (
    <div className="App">
      <div className="top-var">
        <button className="ButtonVar"><p className="textButtonVar">inicio</p></button>
        <button className="ButtonVar"><p className="textButtonVar">compras</p></button>
        <button className="UserBotton"><img src="https://icon-library.com/images/user-login-icon/user-login-icon-23.jpg" height ="40" width="40" /></button>
      </div>
      <div className="mainTitle">
        <h1>Regist Product</h1>
      </div>
      
      <div className="main-display">
        
        <Formproduct/>
      </div>
      
      
    </div>
  );
}

export default App;

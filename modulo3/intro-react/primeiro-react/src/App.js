import foto from './foto.jpeg';
import './App.css';

function mensagem(){
  alert("Boa Noite")
}

function App() {
  return (
    <div className="App">
      <h1> Olá! Eu sou o Rômulo!</h1>
      <header className="App-header">
        <img src={foto} className="App-logo" alt="logo" />
        <p>
          Esse é o meu primeiro site React
        </p>
        <button onClick= {mensagem}> Aperte esse botão. </button>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Comment from './components/Comment';

function App() {
  return (
    <div className="App">
      <h1>My comments app</h1>
      <Comment 
      name ="Bruno Bignardi"
      email="bruno_bignard@hotmail.com"
      message ="Aparentemente ta tudo dando certo"
      date ={new Date()}
      />
      <Comment 
      name ="Beatriz Perez"
      email="bia_perz@hotmail.com"
      message = "Com certeza ta dando certo"
      date = {new Date()}
      />
      


    </div>
  );
}

export default App;

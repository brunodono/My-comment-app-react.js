import React from 'react';
import './App.css';
import Comment from './components/Comment';

class App extends React.Component {

  state = {
    comments:[
      {
      name :"Bruno Bignardi",
      email:"bruno_bignard@hotmail.com",
      message :"Aparentemente ta dando errado",
      date :new Date(),
      },
      {
      name:"Beatriz Perez",
      email:"bia_perz@hotmail.com",
      message:"Relax",
      date:new Date(),
      },

    ]
  };

  addComment= () => {
    const newComment = {
      name:"Mona Lisa",
      email:"monalisadolouvre@hotmail.com",
      message:"Tentaram me jogar torta",
      date:new Date(),
    };

    this.setState({
      comments: [...this.state.comments, newComment]
    });
    
  };

  render() {
    return (
    <div className="App">
      <h1>My comments app</h1>
      {this.state.comments.map((comment, index) => {
        return (<Comment 
        key = {index}
        name = {comment.name}
        email= {comment.email}
        message = {comment.message}
        date ={comment.date}
        />
        )
      })}

      <button onClick={this.addComment}>Add comment</button>

    </div>
    );

  };
};

export default App;

import React from 'react';
import './App.css';
import Comment from './components/Comment/index';
import CommentForm from './components/CommentForm/index';
import Swal from "sweetalert2";

class App extends React.Component {

  state = {
    comments:[
      {
      name :"Bruno Bignardi",
      email:"bruno_bignard@hotmail.com",
      message :"Hi, how are you? That's an example of a comment. I hope you enjoy it. Thanks.",
      date :new Date(),
      },
      {
      name:"Mona Lisa",
      email:"gioconda@email.com",
      message:"The Mona Lisa is one of the most valuable paintings in the world. It holds the Guinness World Record for the highest known painting insurance valuation in history at US$100 million in 1962[12] (equivalent to $870 million in 2021)",
      date:new Date(),
      },
    ],
    form:{
      name:'',
      email:'',
      message:''
    }
  };

  addComment= (event) => {
    event.preventDefault();

  //  console.log(this.state.form);

    const newComment = {...this.state.form, date:new Date()};

   // const newComment = {
   //   name:"Mona Lisa",
   //   email:"monalisadolouvre@hotmail.com",
   //   message:"Tentaram me jogar torta",
   //   date:new Date(),
   // };

    this.setState({
      comments: [...this.state.comments, newComment],
      form: {
        name:"",
        email:"",
        message:""
      }
    });

    Swal.fire('Your comment has been added', '', 'success')
    
  };

 /* onNameChanged = (event) => {
    this.setState({
      form:{
        ...this.state.form,
        name: event.target.value,
      }
    });
  };

  onEmailChanged = (event) => {
    this.setState({
      form:{
        ...this.state.form,
        email: event.target.value,
      },
    });
  };

  onMessageChanged = (event) => {
    this.setState({
      form:{
        ...this.state.form,
        message: event.target.value,
      },
    });
  };
*/

  onFieldChanged = (event) => {

    const newCommentForm = this.state.form;
    newCommentForm[event.target.name] = event.target.value;

    this.setState({
      form:newCommentForm
    })

  };

  deleteCommentAlert = (comment) => {

    Swal.fire({
      title: 'Are you sure you want to delete this comment?',
      showDenyButton: true,
      confirmButtonText: 'Yes, I am!',
      denyButtonText: `No, I changed my mind.`,
      icon:'question',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.deleteComment(comment);
        Swal.fire('The comment has been deleted.', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('No problem, nothing has been deleted.', '', 'info')
      }
    });
  };

  deleteComment = (comment) => {
    const filteredList = this.state.comments.filter((commentFilter)=>{
      return comment !== commentFilter;
    });

    this.setState({
      comments:filteredList,
    });
  };

  render() {
    return (
    <div className="App">
      <h1>My comments app</h1>
      {this.state.comments.map((comment, index) => {
        return (
        <Comment 
        key = {index}
        name = {comment.name}
        email= {comment.email}
        message = {comment.message}
        date ={comment.date}
        onDeleteComment={()=>
          {this.deleteCommentAlert(comment);
          }}
        />
        )
      })}

      <CommentForm 
      onAddComment={this.addComment}
      onFieldChanged={this.onFieldChanged} 
      form={this.state.form}
      /> 
    </div>
    );

  };
};

export default App;

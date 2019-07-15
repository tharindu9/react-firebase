import React , {Component} from 'react';
//import {Link} from "react-router";
import './App.css';
import Note from './note/Note'
import NoteForm from './noteForm/NoteForm';
import { Link } from 'react-router-dom'
import User from './User';





class App extends   Component{

  constructor(props){
    super(props)
    this.state ={
      notes : [
        {id : 1 , noteContent : "note one"},
        { id : 2, noteContent : "note two"},
      ],
      
    }
    this.addNote = this.addNote.bind(this);
  }

  addNote(note){
    const previuoseNote = this.state.notes;
    previuoseNote.push({id : previuoseNote.length+1 , noteContent : note});
    this.setState({
      notes : previuoseNote
    })

  }
  
  render(){
    return (
     
      <div className="NoteWapper">

    <ul>
        <li>
          <Link to="/">To Do App</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
        <div className = "NoteHeader">
          <div className = "NoteHeading">
            <h1>To do List</h1> 
            <ul>
              {/* <li><Link to="/about">About</Link></li>
             <li><Link to="/topics">Topics</Link></li>  */}
            </ul>
          </div>
        </div>
        <div className ="NoteBody" >
          {
            this.state.notes.map((note) =>  {
              return (
                <Note noteContent = {note.noteContent} noteId = {note.noteId} key = {note.id}/>
              )
            }
            )
          }
         </div>
       <div className ="NoteFooter">
         <NoteForm  addNote = {this.addNote}/>
       </div>
      </div>
    );
  }
  }


export default App;

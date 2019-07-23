import React , {Component} from 'react';
//import {Link} from "react-router";
import './App.css';
import Note from './note/Note'
import NoteForm from './noteForm/NoteForm';
import { Link } from 'react-router-dom'
import User from './User';
import firebase from 'firebase/app';
import  'firebase/database';
import {firebaseConfig} from './config/Config'

class App extends   Component{

  constructor(props){
    super(props)
    this.state ={
      notes : [], 
    }  
    
    if (!firebase.apps.length){
      this.app = firebase.initializeApp(firebaseConfig);
    }
    this.db = this.app.database().ref().child('notes')
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

componentWillMount(){
  const previuoseNote = this.state.notes;
  this.db.on('child_added' ,snap=>{
    previuoseNote.push({
      noteId : snap.key,
      noteContent : snap.val().noteContent
    })
    this.setState({
      notes : previuoseNote
    })
  })

  this.db.on('child_removed' ,snap =>{
      for(var i = 0 ; i<previuoseNote.length ; i++){
        if(previuoseNote[i].noteId == snap.key){
          previuoseNote.splice(i,1)
        }
      }

      this.setState({ 
        notes : previuoseNote
      })
  })

 
}

  addNote(note){
  this.db.push({
    noteContent: note
  })
  }

  removeNote(noteID){
   // alert(noteID)
   this.db.child(noteID).remove()

  }
  
  render(){
    return (
     
      <div className="NoteWapper">

    {/* <ul>
        <li>
          <Link to="/">To Do App</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul> */}
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
                <Note noteContent = {note.noteContent} noteId = {note.noteId} key = {note.noteId}
                removeNote = {this.removeNote}/>
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

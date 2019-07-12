import React , {Component} from 'react';
import './App.css';
import Note from './Note/note'

class App extends   Component{

  constructor(props){
    super(props)
    this.state ={
      notes : [
        {id : 1 , noteContent : "note one"},
        { id : 2, noteContent : "note two"},
        { id : 2, noteContent : "note three"},
        { id : 2, noteContent : "note four"},
        { id : 2, noteContent : "note five"}
      ]
    }
  }

  render(){
    return (
      <div className="NoteWapper">
        <div className = "NoteHeader">
          <div className = "NoteHeading">
            <h1>To do List</h1> 
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
       </div>
      </div>
    );
  }
  }


export default App;

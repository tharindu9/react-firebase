import React , {Component} from 'react';
import PropTypes from 'prop-types';
import './NoteForm.css';

class NoteForm extends Component {

    constructor(props){
        super(props);
        this.state ={
            newNoteContent : ""
        }
        
       this.inputFeildHandle = this.inputFeildHandle.bind(this);
       this.writeNote = this.writeNote.bind(this);
    }

    inputFeildHandle(e){
        this.setState({
            newNoteContent :e.target.value,
        })
    }
    writeNote(){
        this.props.addNote(this.state.newNoteContent);
        this.setState({
            newNoteContent : ''
        })
    }

    render(){
        return(
            <div className ="NoteForm" >
               <h1>{this.state.newNoteContent}</h1>
                <input type = "text" placeholder = "Enter the note" id = "textFeild"
                value = {this.state.newNoteContent} onChange = {this.inputFeildHandle}/>
                <button className="AddButton" onClick = {this.writeNote}><b>Add note</b></button>
            </div>
        )
    }
}

export default NoteForm;
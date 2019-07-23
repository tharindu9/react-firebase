import React , {Component} from 'react';
import PropTypes from 'prop-types';
import './Note.css';
import NoteForm from '../noteForm/NoteForm'


class Note extends Component {

    constructor(props){
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
        this.deleteNote = this.deleteNote.bind(this)
    }

    deleteNote(id){
       if(window.confirm("are you sure to delete ?")){
        this.props.removeNote(id);
       }
        
    }

    render(props){
        return(
            <div className="noteContent">
            

            <i onClick={()=> this.deleteNote(this.noteId)} className="fa fa-close CloseButton"></i>
           
                <h5> {this.noteContent}</h5>
            </div>
        )
    }
}

Note.propTypes ={
    noteContent : PropTypes.string
}

export default Note;
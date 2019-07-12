import React , {Component} from 'react';
import PropTypes from 'prop-types';
import './note.css';


class Note extends Component {

    constructor(props){
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
    }

    render(props){
        return(
            <div className="noteContent">
                <h1>{this.noteContent}</h1>
            </div>
        )
    }
}

Note.propTypes ={
    noteContent : PropTypes.string
}

export default Note;
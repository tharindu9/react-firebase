import React , {Component} from 'react';
import PropTypes from 'prop-types';
import './NoteForm.css';

class NoteForm extends Component {

    constructor(props){
        super(props);

    }

    render(props){

        return(
            <div className ="NoteForm" >
                <h1>Note form</h1>
            </div>
        )
    }
}

export default NoteForm;
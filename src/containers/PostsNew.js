import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    // renderField is a function that returns the view layer of JSX and receives all the inputs (and other values) as properties on the 'field' object
    renderField = (field) => {
        return (
            <div>
                <label>{field.label}</label>
                <input
                    type="text"
                    {...field.input}
                />
            </div>
        )
    }

    render(){
        return (
            // all <Field> tags must be wrapped in a <form>
            <form>
                {/* here the 'label' property is a value that is just being passed and 'name' is the key being assigned to that part of the state. */}
                <Field 
                    label="Title"
                    name="title"
                    // the 'component' property is set to the function returning the view layer of JSX
                    component={this.renderField}
                />

                <Field 
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />

                <Field 
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        )
    }
}

// validate is a funciton that stores any errors in user input and reports them to Redux-Form
const validate = () => {

}

// the reduxForm function here takes a single object that wires up the forms as well as the validate method
export default reduxForm({ 
    // this is the validate method for checking user inputs
    validate: validate,
    // 'PostsNewForm' will be the key assigned to the state that contains the values submitted by this form
    form: 'PostsNewForm' 
})(PostsNew);


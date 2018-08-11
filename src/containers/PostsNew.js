import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from "../actions/actions";
import styles from '../styles';

class PostsNew extends Component {
    // * renderField is a function that returns the view layer of JSX and receives all the inputs (and other values) as properties on the 'field' object
    renderField = (field) => {
        // here are the conditional styles that will be set depending on the state of the field
        const conditionalStyles = field.meta.touched && field.meta.error ? styles.errorStyles : styles.normalStyles;

        return (
            <div style={conditionalStyles}>
                <label>{field.label}</label>
                <input
                    type="text"
                    {...field.input}
                />
                {/* here an error is displayed if the field has been touched and not passed validation */}
                {field.meta.touched ? field.meta.error : ""}
            </div>
        )
    }

    onSubmit = (values) => {
        this.props.createPost(values);
    }

    render(){
        //
        const { handleSubmit } = this.props;

        return (
            // * all <Field> tags must be wrapped in a <form>
            <form onSubmit={handleSubmit(this.onSubmit)}>
                {/* here the 'label' property is a value that is just being passed and 'name' is the key being assigned to that part of the state. */}
                <Field 
                    label="Title"
                    name="title"
                    // * the 'component' property is set to the function returning the view layer of JSX
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
                <button type="submit">Submit</button>
                <Link to="/">Cancel</Link>
            </form>
        )
    }
}

// * validate is a function that stores any errors in user input and reports them to Redux-Form
// ** the 'values' parameter is passed an object literal that contains key/value... 
// ...pairs wherein the keys are the 'name' properties and the values are the user inputs.
const validate = (values) => {
    // * validate must create an empty object literal that will store any errors in input validation
    const errors = {};

    // * next, logic must be run that adds key/value pairs to errors if any of the inputs from 'values' don't validate
    // ** for example, this logic checks for the presence and length of the input values
    if (!values.title || values.title.length < 3) errors.title = "Enter a title that is at least 3 characters long";
    if (!values.categories) errors.categories = "Enter a category";
    if (!values.content) errors.content = "Enter some content, please"

    // * last, validate needs to return the 'errors' object. If it's empty the data will proceed...
    // ...otherwise, Redux-Form asssumes the input(s) is invalid.
    return errors;
}

// the reduxForm function here takes a single object that wires up the forms as well as the validate method
export default reduxForm({ 
    // this is the validate method for checking user inputs
    validate: validate,
    // 'PostsNewForm' will be the key assigned to the state that contains the values submitted by this form
    form: 'PostsNewForm' 
    // this stacks the connect function with the reduxForm function
})(connect(null, { createPost })(PostsNew));
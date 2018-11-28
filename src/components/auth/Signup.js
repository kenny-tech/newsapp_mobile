import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
  } from 'react-native'

import * as actions from '../../actions';

class Signup extends Component {

    handleFormSubmit(formProps) {
        this.props.signupUser(formProps);
    }

    renderField = ({ input, label, type, className,  meta: { touched, error, warning } }) => (
        <View>
          <Text>{label}</Text>
          <View>
            <TextInput {...input} placeholder={label} type={type} className={className}/>
            {touched && ((error && <Text style={styles.error}>{error}</Text>) || (warning && <Text style={styles.error}>{warning}</Text>))}
          </View>
        </View>
    );

    renderError() {
        if (this.props.errorMessage) {
            return (
                <View>
                    <Text style={styles.error}>Oops! {this.props.errorMessage}</Text>
                </View>
            );
        }
    }
    
    render() {
        const { handleSubmit, submitting } = this.props;

        return (
            <View>
                <Text>Sign Up</Text>
                <Field 
                    name="email" 
                    type="email" 
                    component={this.renderField} 
                    label="Email"/>
                <Field 
                    name="password" 
                    type="password" 
                    component={this.renderField} 
                    label="Password"/>
                <Field
                    name="passwordConfirmation" 
                    type="password" 
                    component={this.renderField} 
                    label="Password Confirmation"/>
                {this.renderError()}
                <TouchableOpacity onPress={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <Text style={styles.button}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Please enter an email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Please enter a password';
    }

    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = 'Please enter a password confirmation';
    }

    if (values.password !== values.passwordConfirmation) {
        errors.passwordConfirmation = 'Password must match';
    }

    return errors;
};

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.error }
}

export default reduxForm({
    form: 'signup',
    validate
})(connect(mapStateToProps, actions)(Signup));

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'blue',
      color: 'white',
      height: 30,
      lineHeight: 30,
      marginTop: 10,
      textAlign: 'center',
      width: 250
    },
    container: {
  
    },
    input: {
      borderColor: 'black',
      borderWidth: 1,
      height: 37,
      width: 250
    },
    error: {
        color: 'red'
    }
})

import React , { Component } from 'react';
import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const error= {};
  error.email= '';
  error.password= '';
  var email = values.email;
  var password = values.password;

  if(values.email === undefined){
    email = '';
  }
  if(values.password === undefined){
    password = '';
  }
  if(email.length < 8 && email !== ''){
    error.email= 'too short';
  }
  if(!email.includes('@') && email !== ''){
    error.email= '@ not included';
  }
  if(password.length > 8){
    error.name= 'max 8 characters';
  }
  return error;
};

class Signin extends Component {
  constructor(props){
    super(props);
    this.state={
      isReady: false
    };
    this.renderInput = this.renderInput.bind(this);
  }
  
  renderInput({ input, label, type, meta: { touched, error, warning } }){
    var hasError= false;
    if(error !== undefined){
      hasError= true;
    }
    return( 
      <Item error= {hasError}>
        <Input {...input} placeholder={label} type={type}/>
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    )
  }
  render(){
    const { handleSubmit, reset } = this.props;
    
    return (
      <Container>
        <Header>
          <Body>
            <Title>Sign In</Title>
          </Body>
        </Header>
        <Content padder>
          <Field name="email" type="email" component={this.renderInput} label="Email"/>
          <Field name="password" type="password" component={this.renderInput} label="Password"/>
          <Button block primary onPress= {reset}>
            <Text>Submit</Text>
          </Button>
          <Text></Text>
          <Text>Don't have any account yet? Register</Text>
        </Content>
      </Container>
    )
  }
}

export default reduxForm({
  form: 'signin',
  validate
})(Signin)
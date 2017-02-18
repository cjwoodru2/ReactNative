import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, Button, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
  state = {
    email: '',
    password: '',
   };

   onButtonPress() {
     const { email, password, error } = this.state;

     this.setState({error: '', loading: true});

     firebase.auth().signInWithEmailAndPassword(email, password)
     .then(this.onLoginSuccess.bind(this))
     .catch(() => {
       firebase.auth().createUserWithEmailAndPassword(email, password)
       .then(this.onLoginSuccess.bind(this))
       .catch(this.onLoginFail.bind(this));
     });

   }

   onLoginSuccess() {
     this.setState({
       email: '',
       password: '',
       loading: false,
       error: ''
     });

   }

   onLoginFail() {
    this.setState({ error: 'Authentication Failed.', loading: false});
   }

   renderButton() {
     if (this.state.loading) {
       return <Spinner size="small"/>
     }

     return (
       <Button onPress={this.onButtonPress.bind(this)}>
         Log In
       </Button>
     );
   }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            label={'Email:'}
            placeholder={'email@email.com'}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.state.password}
            label={'Password:'}
            placeholder={'password'}
            onChangeText={password => this.setState({ password })}
            secureTextEntry={true}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;

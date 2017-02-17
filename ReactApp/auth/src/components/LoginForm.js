import React, { Component } from 'react';
import { Card, Button, CardSection, Input } from './common';

class LoginForm extends Component {
  state= {
    email: '',
    password: ''
   };
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

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}



export default LoginForm;

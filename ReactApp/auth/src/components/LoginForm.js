import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Button, CardSection } from './common';

class LoginForm extends Component {
  render() {
    return(
      <Card>
        <CardSection></CardSection>
        <CardSection></CardSection>
        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;

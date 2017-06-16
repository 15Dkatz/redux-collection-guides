import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

class App extends Component {
  constructor() {
    super();

    this.state = {
      newDate: '',
      birthday: '1992-06-21'
    }
  }

  changeBirthday() {
    console.log(this.state);
    this.setState({ birthday: this.state.newDate });
  }

  render() {
    return (
      <div className="App">
        <Form inline>
          <h2>Input Your Birthday!</h2>
          <FormControl 
            type="date"
            onChange={ event => this.setState({ newDate: event.target.value })}
          >
          </FormControl>
          {' '}
          <Button onClick={() => this.changeBirthday()}>
            Submit
          </Button>
          <AgeStats date={this.state.birthday}/>
        </Form>
      </div>
    )
  }
}

export default App;
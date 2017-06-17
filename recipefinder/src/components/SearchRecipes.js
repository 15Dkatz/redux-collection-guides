import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class SearchRecipes extends Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>
          {' '}
          <FormControl type="text" placeholder="garlic, chicken" />
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Dish</ControlLabel>
          {' '}
          <FormControl type="text" placeholder="adobo"></FormControl>
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
    )
  }
}

export default SearchRecipes;
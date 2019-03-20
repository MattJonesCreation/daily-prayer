import React, { Component } from 'react';
import { Container, Header, Grid, Form } from 'semantic-ui-react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        this.setState({ value: '' });
        event.preventDefault();
    }

    render() {
        return (
            <Container className="App-container">
                <Header as="h2">Send your prayer to God.</Header>
                <Grid columns={1} stackable>
                    <Grid.Column>
                        <Form>
                            <Form.TextArea placeholder="Pray here" value={this.state.value} onChange={this.handleChange} />
                            <Form.Button primary onClick={this.handleSubmit}>Send</Form.Button>
                        </Form>
                    </Grid.Column>                
                </Grid>
            </Container>              
        );
  }
}

export default App;
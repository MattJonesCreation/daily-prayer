import React, { Component } from 'react';
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
            <div className="App">
                <header className="App-header">
                    <p>Send your prayer to God.</p>
                    <textarea className="App-textarea" value={this.state.value} onChange={this.handleChange} />
                    <button className="App-button" onClick={this.handleSubmit}>Send</button>
                </header>
            </div>
        );
  }
}

export default App;
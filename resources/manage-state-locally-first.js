class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  
  handleChange(event) {
    this.setState({input: event.target.value})
  }
  submitMessage(event) {
    this.setState({messages: this.state.messages.concat(this.state.input), input: ''})
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input onChange={this.handleChange} value={this.state.input}/>
        <button onClick={this.submitMessage}>Send</button>
        <ul>
          {this.state.messages.map((m) => <li>{m}</li>)}
        </ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};
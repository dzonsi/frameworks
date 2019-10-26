class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.name.number,
      increment: this.props.name.increment
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({ number: this.state.number + this.state.increment });
  }
  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.handleChange}>Add {this.state.increment}</button>
      </div>
    );
  }
}

function withAdd(WrappedComponent, data) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      number: data.number,
      increment: data.increment
      }
    }
    render() {
      return (
        <div>
          <WrappedComponent name={this.state} />
          <WrappedComponent name={this.props.numbers} />
        </div>
      );
    }
  };
}

const CounterWithAdd = withAdd(Counter, {number: 10, increment: 5});

ReactDOM.render(<CounterWithAdd numbers={{number:0, increment: 2}}/>, document.getElementById('root'));
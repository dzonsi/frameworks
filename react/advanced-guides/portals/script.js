const appRoot = document.getElementById('root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
        this.props.children,
        this.el
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={ showModal: false, clicks: 0 };
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleShow() {
    this.setState({ showModal: true})
  }
  handleHide() {
    this.setState({ showModal: false})
  }
  handleClick() {
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }
  render() {
    const clicks = this.state.clicks;
    const modal = this.state.showModal ?
      (
        <Modal>
          <div className="modal">
            <div>
            With a portal, we can render content into a different
            part of the DOM, as if it were any other React child.
            </div>
            This is being rendered inside the #modal-container div.
            <button onClick={this.handleHide}>Hide modal</button>
          </div>
        </Modal>
    ) : null;
    return (
      <div className="app" onClick={this.handleClick}>
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        <p>{clicks}</p>
        {modal}
      </div>
    );
  }
}
ReactDOM.render(<App />, appRoot);
class App extends React.Component {
  result() {
    let fruits = ["🍊", "🍒"];
    return fruits[Math.floor(Math.random() * fruits.length)];
  }
  render() {
    return (
      <div class="container">
        <h1>Slot Machine</h1>
        <Machine s1={this.result()} s2={this.result()} s3={this.result()} />
        <Machine s1={this.result()} s2={this.result()} s3={this.result()} />
        <Machine s1={this.result()} s2={this.result()} s3={this.result()} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

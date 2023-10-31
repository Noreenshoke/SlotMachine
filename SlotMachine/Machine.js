class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const winner = s1 === s2 && s2 === s3;
    console.log(this.props);

    return (
      <div>
        <div>{s1} {s2} {s3}</div>
        <div>{winner ? "You win" : "You Lose"}</div>
      </div>
    );
  }
}

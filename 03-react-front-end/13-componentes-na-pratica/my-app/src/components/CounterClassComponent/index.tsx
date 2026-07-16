import { Component } from "react";

interface Props {
  message: string;
}

interface State {
  count: number;
}

class CounterClassComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
        <h2>Contador: {this.state.count}</h2>
        <button className="button" onClick={() => this.increase()}>
          Adicionar
        </button>
      </div>
    );
  }
}

export default CounterClassComponent;

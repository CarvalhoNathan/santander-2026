import { Component } from "react";
import type { ComponentType } from "react";

export function withLogger<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  return class WithLogger extends Component<P> {
    componentDidMount() {
      console.log(`[Logger HOC - Class] Componente montado com sucesso no DOM!`);
    }

    componentWillUnmount() {
      console.log(`[Logger HOC - Class] Componente desmontado do DOM!`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

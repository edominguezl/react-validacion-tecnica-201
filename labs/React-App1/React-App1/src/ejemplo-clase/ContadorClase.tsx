import { Component } from "react";
 
interface ContadorProps {
  titulo: string;
  valorInicial?: number;
}
 
interface ContadorState {
  contador: number;
}
 
class ContadorClase extends Component<ContadorProps, ContadorState> {
  constructor(props: ContadorProps) {
    super(props);
 
    this.state = {
      contador: props.valorInicial ?? 0,
    };
  }
 
  incrementar = (): void => {
    this.setState((estadoAnterior) => ({
      contador: estadoAnterior.contador + 1,
    }));
  };
 
  render() {
    return (
        <div>
            <h2>{this.props.titulo}</h2>
            <p>Contador: {this.state.contador}</p>
            <button onClick={this.incrementar}>Incrementar</button>
        </div>
    );
  }
}
 
export default ContadorClase;
import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  background-color: black;
  h1 {
    font-size: 40px;
    color: #ffff;
  }
  h2 {
    font-size: 60px;
    color: #ffff;
  }
`;
const Box = styled.div`
  display: flex;
  width: 35vw;
  height: 30vh;
  justify-content: space-around;
  flex-wrap: wrap;

  button {
    width: 5vw;
    height: 10vh;
    border-radius: 100%;
    border: none;
    font-size: 50px;
    background-color: red;
    color: #ffff;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
`;




class App extends Component {
  state = {
    numero: 0
  };

  aumentar = () => {
    this.setState({
      numero: this.state.numero < 10 ? this.state.numero + 1 : 10
    });
  };
  diminuir = () => {
    this.setState({
      numero: this.state.numero > 0 ? this.state.numero - 1 : 0
    });
  };

  render() {
    return (
      <>
        <Container>
          <h1>Contador</h1>
          <h2>{this.state.numero}</h2>
          <Box>
            <button onClick={this.diminuir}>-</button>
            <button onClick={this.aumentar}>+</button>
          </Box>
          
        </Container>
      </>
    );
  }
}
export default App;

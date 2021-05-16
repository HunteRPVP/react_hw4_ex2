import { render } from "@testing-library/react";
import { Button } from "grommet";
import React, { useState } from "react";
import "./App.css";

// function App(props) {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div className = "App">
//       <Button primary onClick = {() => setCounter(counter + 1)} style = {{width: "200px", textAlign: "center"}}>
//         На меня нажали {counter} раз.
//       </Button>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div className="App">
        <Button
          primary
          onClick={this.handlerClick}
          style={{ width: "200px", textAlign: "center" }}
        >
          На меня нажали {this.state.counter} раз.
        </Button>
      </div>
    );
  }
}

export default App;

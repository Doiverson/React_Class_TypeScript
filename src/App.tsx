import React from 'react';
import './App.css';

interface AppProps {
    color?: string;
}

interface AppState {
    counter: number;
}

// Functional Component
// const App = (props: AppProps): JSX.Element => {
//     return <div>
//         {props.color}
//     </div>
// };

class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
        this.state = { counter: 0 }
    }


    // Either this or using constructor
    // state = {
    //     counter: 0
    // }

    onInc = (): void => {
      this.setState({ counter: this.state.counter + 1 });
    };

    onDec = (): void => {
      this.setState({ counter: this.state.counter -1 });
    };

    render () {
    return (
        <div className="App">
          <button onClick={this.onInc}>Inc</button>
          <button onClick={this.onDec}>Dec</button>
          {this.state.counter}
        </div>
    );
    }
}

export default App;

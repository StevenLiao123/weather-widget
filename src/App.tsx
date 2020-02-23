import React from 'react';
import './App.css';

import Editor from './components/editor';
import Widget from './components/widget';

// define types for props
interface AppProps {
  title: string;
  unit: string;
  showWind: string;
}

// define types for state
interface AppState {
  title: string;
  unit: string;
  showWind: string;
}

class App extends React.Component<AppState, AppProps> {
  constructor(props: Readonly<AppState>) {
    super(props);
    this.state = {
      title: "TITLE OF WIDGET",
      unit: "metric",
      showWind: "true",
    };

    this.updateStateFromEditorToWidget = this.updateStateFromEditorToWidget.bind(this);
  }

  // the function passes to weather editor and get back the data from the editor
  updateStateFromEditorToWidget(title: string, unit: string, showWind: string): any {
    this.setState({
      title: title,
      unit: unit,
      showWind: showWind,
    });
  }

  render(){
    const { title, unit, showWind } = this.state;
    return (
      <div className="App">
          <Editor updateStateFromEditorToWidget={this.updateStateFromEditorToWidget} />
          <Widget title={title} unit={unit} showWind={showWind}/>
      </div>
    );
  }
}

export default App;

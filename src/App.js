import './App.css';

import React, {Component} from 'react';

class App extends Component {

  constructor() {
    super();
		this.state = {
        projects: [
          {
            id: 0,
            title: "",
            description: [],
            links: [
              {
                id: 0,
                type: "",
                label: "",
                url: ""
              },
            ],
            tags: []
          },
        ]
        
    }
  }


  render() {
    return (
      <div className="App">
        {
          JSON.stringify(this.state.projects)
        }
      </div>
    );
  }

  componentDidMount() {
    fetch("https://ybardapurkar-data.herokuapp.com/api/projects") // data source is an object, not an array.
      .then(res => {
        res.json()
      })
      .then(
        result => {
          this.setState({
            projects: result,
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  }
}

export default App;

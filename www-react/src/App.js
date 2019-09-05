import React from 'react';
import Echo from './Components/Echo'
import Header from './Components/Header'  
import './App.css';

class App extends React.Component {
  render() {
    const refreshInterval = 5;
    const result = {
        "RADIX_APP": "my_app",
        "RADIX_CLUSTERNAME": "dev-1",
        "RADIX_COMPONENT": "echo",
        "RADIX_ENVIRONMENT": "development",
        "RADIX_HOSTNAME":"https://external-preview.redd.it/7a_iqSnsaDNABkxgJDq_hhmMlXp0B6TXwg7mgaGFBRk.jpg?auto=webp&s=aa42f6e3468e517efa41e8b857ac84d56fdfa909",
        "RADIX_HOSTPLATFORM":"linux"
    }

    return (
      <div className="App">
        <Header />
        <Echo result={result} refreshInterval={refreshInterval} />
      </div>
    );
  }
}

export default App;
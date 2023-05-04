

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App App-header">
      <Router>

        <Routes>
          {/* <Route path='/chats' Component={Chats}/> */}
          <Route path='/' Component={Login} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

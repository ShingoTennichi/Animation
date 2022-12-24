import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Home';
import Basketball from './Basketball';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/basketball' element={ <Basketball /> } />
            </Routes>
        </Router>
    );
}

export default App;

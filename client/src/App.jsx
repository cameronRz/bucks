import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [message, setMessage] = useState(null);

    useEffect(() => {
        fetch('http://localhost/api')
            .then(res => res.json())
            .then(data => setMessage(data.message))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Welcome to Bucks!</p>
                {message ? <p>{message}</p> : null}
            </header>
        </div>
    );
}

export default App;

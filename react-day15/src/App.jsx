import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Card.jsx";
import Creative from "./Creative";
import Hero from "./Hero";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            
            <Card title="React" description="A JavaScript library for building user interfaces"/>
            <Creative title="React" description="A new framework we are learning today" image="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg" buttonText="Click" onButtonClick={()=> alert("Button Clicked")}/>
            <Hero /> 
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
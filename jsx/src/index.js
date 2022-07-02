// 1) Import React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom/client'

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
    let msg = "Bye There!!";

    if (Math.random() > 0.5) {
        msg = "Hello There!!!";
    }

    return <input placeholder='Hey ' />;
}

// 5) Show the component on the screen

root.render(<App />);
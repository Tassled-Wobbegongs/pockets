import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navBar.jsx';
import MainContainer from './containers/mainContainer.jsx';

const App = () => {
    return (
        <div>
            <NavBar />
            <MainContainer />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))
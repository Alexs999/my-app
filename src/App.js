import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nacvbar/Navbar';
import Sitebar from './components/Sitebar/Sitebar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <Dialogs state={props.state.dialogsPage} /> }/>
                    <Route path='/profile'
                           render={ () => <Profile state={props.state.profilePage}/>}/>

                    <Route path='/News' render={News}/>
                    <Route path='/Music' render={Music}/>
                    <Route path='/Settings' render={Settings}/>

                </div>
            </div>

        </BrowserRouter>)
}


export default App;

import { useState } from 'react'
import Header from './Header/Header.jsx';
import Body from './Body/Body.jsx';
import './App.css'

function App() {
  const author = "Phong Doan";
  const appName = 'Problem67';
  return (
    <>
      <div className = 'app-container'>
        <Header author = {author} appName = {appName}></Header>
        <Body></Body>
      </div>
      
    </>
  )
}

export default App

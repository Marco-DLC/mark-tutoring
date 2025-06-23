import { useState } from 'react'
import './App.css'
import Content from './components/Content.jsx'
import Header from './components/Header.jsx'
import SubHeader from './components/SubHeader.jsx'

function App() {
  return (
    <>
    <div className='App'>
    <Header />
    <SubHeader />
    <Content />
    </div>
    </>
  )
}

export default App

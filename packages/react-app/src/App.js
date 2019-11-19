import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <cmp-button onClick={onClick}>Default button</cmp-button>
      <cmp-button primary onClick={onClickPrimary}>
        Primary button
      </cmp-button>
      <cmp-button secondary onClick={onClickSecondary}>
        Secondary button
      </cmp-button>
    </div>
  )
}

function onClick() {
  console.log('click on button')
}

function onClickPrimary() {
  console.log('click on primary button')
}

function onClickSecondary() {
  console.log('click on secondary button')
}

export default App

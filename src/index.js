import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux';
import Login from './Components/Login';
import { Router } from 'react-router';



const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <div>
      <Login />,

  </div>,
   
   
  rootEl
)


render()

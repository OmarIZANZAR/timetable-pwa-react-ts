import './styles/App.css';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { API } from './context'
import { StateInterface } from './utils/interfaces';

const App: React.FC = () : JSX.Element => {
  const state = useSelector((state: StateInterface) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(API.initiateState(state))
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

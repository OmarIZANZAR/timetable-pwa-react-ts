import './styles/App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, RoutesProps } from 'react-router-dom';
import { Home, Setup } from './pages';
import { API } from './context'

function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(API.initiateState(state))
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Setup />} />
        <Route path="/table" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

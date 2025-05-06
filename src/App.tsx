import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './modules/home/screens/Home';
import CreateStudy from './modules/study/screens/CreateStudy';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<CreateStudy/>} />
      </Routes>
    </>
  )
}

export default App

import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './modules/home/screens/Home';
import CreateStudy from './modules/study/screens/CreateStudy';
import StudyCreated from './modules/study/screens/StudyCreated';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<CreateStudy/>} />
        <Route path="/study/:studyId" element={<StudyCreated/>} />
      </Routes>
    </>
  )
}

export default App

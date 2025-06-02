import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './modules/home/screens/Home';
import CreateStudy from './modules/study/screens/CreateStudy';
import StudyCreated from './modules/study/screens/StudyCreated';
import ShareStudy from './modules/study/screens/ShareStudy';
import ResultsStudy from './modules/results/screen/ResultsStudy';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<CreateStudy/>} />
        <Route path="/study/:studyId" element={<StudyCreated/>} />
        <Route path="/study/share/:studyId" element={<ShareStudy/>} />
        <Route path="/study/result/:studyId" element={<ResultsStudy/>} />
      </Routes>
    </>
  )
}

export default App

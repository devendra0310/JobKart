import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import PostAJob from './pages/PostAJob';
import MyJobs from './pages/MyJobs';
import UpdateJob from './pages/UpdateJob';

function App() {
  return (
    <div className="App">
    <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/post-job' element={<PostAJob/>}></Route>
        <Route path='/my-job' element={<MyJobs/>}></Route>
        <Route path='/edit-job/:id' element={<UpdateJob/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;

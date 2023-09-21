import './App.css';
import Home from './components/Home';
import TestPage from './components/TestPage';
import FinishPage from './components/FinishPage';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TestStartMiddleware from './middleware/TestStartMiddleware';
import TestEndMiddleware from './middleware/TestEndMiddleware';
import ProcessPage from './components/ProcessPage';
import Navbar from './utils/Navbar';


function App() {
  return (
    <main className=' font-normal  '>
      <BrowserRouter>
        <Navbar />
        <Routes >
          
            <Route path='/' element ={<Home />}/>
            <Route path='/process' element ={<ProcessPage />}/>
            <Route path='/test' element ={
              <TestStartMiddleware>
                <TestPage />
              </TestStartMiddleware>
            }/>
            <Route path='/end' element ={
              <TestEndMiddleware>
                <FinishPage />
              </TestEndMiddleware> 
            }/>
          
        </Routes>
      </BrowserRouter>
    </main>

  );
}

export default App;


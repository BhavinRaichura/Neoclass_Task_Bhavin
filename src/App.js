import './App.css';
import Home from './components/Home';
import TestPage from './components/TestPage';
import FinishPage from './components/FinishPage';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {MathJaxContext} from 'better-react-mathjax'
import TestStartMiddleware from './middleware/TestStartMiddleware';
import TestEndMiddleware from './middleware/TestEndMiddleware';
import ProcessPage from './components/ProcessPage';
import Navbar from './utils/Navbar';

const mathJaxConfig = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["$ ", " $"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\", "\\"],
    ],
  },
  options: {
    skipHtmlTags: ["script", "noscript", "style", "textarea", "pre"],
  },
};

function App() {
  return (
    <MathJaxContext config={mathJaxConfig} >

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
   </MathJaxContext>
  );
}

export default App;


import './App.css';
import Header from './components/header/c';
import Footer from './components/footer/c';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main/c'
import Lucum from './components/main/lucum/c';
import Main2 from './components/main/Main2/c';
import Audio from './components/main/audio/c';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
             <Route path='/' element={<Main/>}/>
             <Route path='/xndir' element={<Main2/>}/>
             <Route path='/lucum' element={<Lucum/>}/>
             <Route path='/audio' element={<Audio/>}/>
        </Routes>
       <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;

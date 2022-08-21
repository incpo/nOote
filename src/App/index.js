import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../Components/Header';
import FooterPage from '../Components/Footer';
import Main from '../Components/Main';
import About from '../Components/About';
import Note from '../Components/Note';
import Create from '../Components/Create';
import Error from '../Components/Error';
import 'bulma/css/bulma.min.css';
import './style.css';


export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact='true' path='/' element={<Main/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/create' element={<Create/>} />

        <Route exact='true' path='/note' element={<Note />} />
        <Route exact='true' path='/note/:url' element={<Note />} />
        <Route exact='true' path='*' element={<Error/>}/>
      </Routes>
      <FooterPage/>
    </Router>
  );
}



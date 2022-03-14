
import './App.css';
import ArtistsHome from './components/ArtistsHome'
import { Route, Routes } from "react-router-dom";
import AddArtist from './components/AddArtist';

function App() {
  return (
    <div className='AppWrap'>
      <Routes>
          <Route path="/" element={<ArtistsHome/>}/>
          <Route path="/add" element={<AddArtist/>}/>
         
        </Routes>
  
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Room } from './Room';
import { Videoconference } from './Videoconference';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Room></Room>}></Route>
        <Route path='/videoconference/:roomId' element={<Videoconference></Videoconference>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

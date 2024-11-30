import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router';
import Studenti from './components/Studenti/Studenti';
import Index from './components/Index/Index';
import Student from './components/Studenti/Student';
import Profesori from './components/Profesori/Profesori';
import Profesor from './components/Profesori/Profesor';
import StudentDodaj from './components/Studenti/StudentDodaj';
import ProfesorDodaj from './components/Profesori/ProfesorDodaj';
import Prostorije from './components/Prostorije/Prostorije';
import Prostorija from './components/Prostorije/Prostorija';
import ProstorijaDodaj from './components/Prostorije/ProstorijaDodaj';
import Razmene from './components/Razmene/Razmene';
import Razmena from './components/Razmene/Razmena';
import RazmenaDodaj from './components/Razmene/RazmenaDodaj';
import StudijskiProgrami from './components/StudijskiProgrami/StudijskiProgrami';
import StudijskiProgram from './components/StudijskiProgrami/StudijskiProgram';
import StudijskiProgramDodaj from './components/StudijskiProgrami/StudijskiProgramDodaj';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/programs/add" exact element={<StudijskiProgramDodaj />} />
        <Route path="/programs/:id" exact element={<StudijskiProgram />} />
        <Route path="/programs" exact element={<StudijskiProgrami />} />
        <Route path="/exchanges/add" exact element={<RazmenaDodaj />} />
        <Route path="/exchanges/:id" exact element={<Razmena />} />
        <Route path="/exchanges" exact element={<Razmene />} />
        <Route path="/rooms/add" exact element={<ProstorijaDodaj />} />
        <Route path="/rooms/:id" exact element={<Prostorija />} />
        <Route path="/rooms" exact element={<Prostorije />} />
        <Route path="/students/:id" exact element={<Student />} />
        <Route path="/students" exact element={<Studenti />} />
        <Route path="/students/add" exact element={<StudentDodaj />} />
        <Route path="/profesors/:id" exact element={<Profesor />} />
        <Route path="/profesors" exact element={<Profesori />} />
        <Route path="/profesors/add" exact element={<ProfesorDodaj />} />
        <Route path="/" index element={<Index />} />
        <Route path="*" element={<><h1>Nije pronadjena</h1></>} />
      </Routes>
    </div>
  );
}

export default App;

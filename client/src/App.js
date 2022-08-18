import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dogs from './components/Dogs/Dogs';
import LandingPage from './components/LandingPage/LandingPage.jsx'
import DogDetail from './components/DogDetail/DogDetail';
import CreateDog from './components/CreateDog/CreateDog';



function App() {
  return (
    <div className="App">


      <Routes>
        
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path='/Home' element={<Dogs/>}/>
        <Route path='/home/breedDetail/:id' element={<DogDetail/>}/>
        <Route path='Home/CreateDog' element={<CreateDog/>}/>
        

      </Routes>
      
    </div>
  );
}

export default App;

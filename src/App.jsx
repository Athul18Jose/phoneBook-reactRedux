import { Route , Routes} from 'react-router';
import './App.css';
import Landing from './Pages/Landing';
import Add from './Components/Add';
import Edit from './Components/Edit';
import Header from './Components/Header'
import Footer from './Components/Footer';




function App() {
  return (
   <>
   <Header/>
  <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/add' element={<Add/>} />
    <Route path='/edit/:id' element={<Edit/>} />
  </Routes>
    <Footer/>
   </>
    
  );
}

export default App;

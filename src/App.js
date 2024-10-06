
import CommingSoon from './component/CommingSoon';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from './component/Mainpage';
import Calendar from './component/Calendar';


function App() {
  return (
    <div className='App'>
  
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Mainpage/>}></Route>
            <Route path="/commingsoon" element={<CommingSoon/>}></Route>
            <Route path="/calendar" element={<Calendar/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

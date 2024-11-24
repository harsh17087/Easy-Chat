import { Outlet } from 'react-router-dom';
import './App.css';
import Menubar from './components/Menubar';

function App() {
  return (
    <div className='app'>
      <div className='menubar'>
        <Menubar />
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;

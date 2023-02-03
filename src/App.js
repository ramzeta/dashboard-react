import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import SideNavBar from './components/SideNavBar/SideNavBar';
import Signup from "./components/Signup"


function App() {
  return (
    <>
    <HeaderBar></HeaderBar>
    <SideNavBar>
    <Signup></Signup>
    </SideNavBar>
    
    </>
  );
}

export default App;

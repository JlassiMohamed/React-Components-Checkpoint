import './App.css';
import ProfilPhoto from './components/Profile/ProfilPhoto'
import FullName from './components/Profile/FullName'
import Address from './components/Profile/Address'

function App() {
  return (
    <div className="App">
      <p className='title'>Welcome to my profile page</p>
{/* A photo of my profil */}
      <ProfilPhoto/>
{/* My full name */}
      <FullName/>
{/* My adress */}
      <Address/>

    </div>
  );
}

export default App;

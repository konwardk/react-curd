import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import Guest from './views/guest/guest.js';


function App() {
  const isLogedIn = true;
  return (
    <>
    <Guest/>
    </>
  );
}

export default App;

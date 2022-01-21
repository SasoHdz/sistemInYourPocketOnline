import logo from './logo.svg';
import './App.css';
import { SystemProvider } from './SystemContext';
import { Home } from './Pages/Home';


function App() {
  return (
    <SystemProvider>
      <Home />  
    </SystemProvider>
  );
}

export default App;

// routes
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/routes'
// components
import Header from './components/Header';
// custom
import './App.scss';
// ---------------------------------------------
function App() {
  return (
    <div className="container-max">
      <BrowserRouter>
        <Header/>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;

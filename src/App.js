// routes
import { BrowserRouter } from "react-router-dom";
import Router from './routes/routes'

// custom
import './App.scss';
// ---------------------------------------------
function App() {
  return (
    <BrowserRouter>
      <div className="container-max">
        <Router/>
      </div>
    </BrowserRouter>
  );
}

export default App;

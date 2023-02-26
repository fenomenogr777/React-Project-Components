import './index.css';
import Sidebar from './components/Sidebar';
import Route from './components/Route';
import HomePage from './pages/HomePage';
import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropdownPage';
import AccordionPage from './pages/AccordionPage';
import ModalPage from './pages/ModalPage';
function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-page">
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path={'/dropdown'}>
          <DropdownPage />
        </Route>
        <Route path={'/modal'}>
          <ModalPage />
        </Route>
      </div>
    </div>
  );
}

export default App;

<<<<<<< HEAD
import './index.css';
=======
>>>>>>> d49fb488b58c75ffe9593075cdbcb7a6d8ae9078
import Sidebar from './components/Sidebar';
import Route from './components/Route';
import HomePage from './pages/HomePage';
import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropdownPage';
import AccordionPage from './pages/AccordionPage';
<<<<<<< HEAD
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
=======

function App() {
  return (
    <div>
      <Sidebar />
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
>>>>>>> d49fb488b58c75ffe9593075cdbcb7a6d8ae9078
    </div>
  );
}

export default App;

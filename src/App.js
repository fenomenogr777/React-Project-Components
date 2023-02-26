import Sidebar from './components/Sidebar';
import Route from './components/Route';
import HomePage from './pages/HomePage';
import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropdownPage';
import AccordionPage from './pages/AccordionPage';

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
    </div>
  );
}

export default App;

import { useContext } from 'react';
import NavigateContext from '../context/navigation';

function Route({ children, path }) {
  const { currentPath } = useContext(NavigateContext);



  if (currentPath === path) {
    return children;
  }

  return null;
}

export default Route;

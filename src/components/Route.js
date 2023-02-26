import { useContext } from 'react';
import NavigateContext from '../context/navigation';

function Route({ children, path }) {
  const { currentPath } = useContext(NavigateContext);

<<<<<<< HEAD


=======
>>>>>>> d49fb488b58c75ffe9593075cdbcb7a6d8ae9078
  if (currentPath === path) {
    return children;
  }

  return null;
}

export default Route;

import { useContext } from 'react';
import NavigateContext from '../context/navigation';

<<<<<<< HEAD
function Link({ children, to, className }) {
  const { navigation, currentPath } = useContext(NavigateContext);

  const handleClick = e => {
    // IF CTRL(OR MAC) WHEN CLICKED ONE ON NEW PAGE
    if (e.ctrlKey || e.metaKey) {
      return navigation(to);
    }

    e.preventDefault();
    navigation(to);
  };
  return (
    <a
      className={`${className} ${currentPath === to ? 'active-link' : ''}`}
      onClick={handleClick}
      href={to}
    >
=======
function Link({ children, to }) {
  const { navigation } = useContext(NavigateContext);

  const handleClick = e => {
    e.preventDefault();
    navigation(to);
  };

  return (
    <a onClick={handleClick} href={to}>
>>>>>>> d49fb488b58c75ffe9593075cdbcb7a6d8ae9078
      {children}
    </a>
  );
}

export default Link;

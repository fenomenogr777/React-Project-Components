import { useContext } from 'react';
import NavigateContext from '../context/navigation';

function Link({ children, to }) {
  const { navigation } = useContext(NavigateContext);

  const handleClick = e => {
    // IF CTRL(OR MAC) WHEN CLICKED ONE ON NEW PAGE
    if (e.ctrlKey || e.metaKey) {
      return navigation(to);
    }

    e.preventDefault();
    navigation(to);
  };

  return (
    <a onClick={handleClick} href={to}>
      {children}
    </a>
  );
}

export default Link;

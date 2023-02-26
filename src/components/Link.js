import { useContext } from 'react';
import NavigateContext from '../context/navigation';

function Link({ children, to }) {
  const { navigation } = useContext(NavigateContext);

  const handleClick = e => {
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

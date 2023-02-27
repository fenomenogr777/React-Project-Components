// import Link from './Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link, Tabs } from '@mui/material';
import { useContext } from 'react';
import NavigateContext from '../context/navigation';

function Sidebar({ to }) {
  const { navigation } = useContext(NavigateContext);

  const handleClick = link => {
    navigation(link);
  };

  const links = [
    { label: 'Home', path: '/' },
    { label: 'Button', path: '/button' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Dropdown', path: '/dropdown' },
    { label: 'Modal', path: '/modal' },
  ];

  const renderedLinks = links.map(link => {
    return (
      <Link
        className="custom-link"
        key={link.path}
        color="orange"
        component="button"
        underline="none"
        variant="h5"
        onClick={() => handleClick(link.path)}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', gap: 3 }}>{renderedLinks}</Toolbar>
    </AppBar>
  );
}

export default Sidebar;

import Link from './Link';

function Sidebar() {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'Button', path: '/button' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Dropdown', path: '/dropdown' },
<<<<<<< HEAD
    { label: 'Modal', path: '/modal' },
=======
>>>>>>> d49fb488b58c75ffe9593075cdbcb7a6d8ae9078
  ];

  const renderedLinks = links.map(link => {
    return (
<<<<<<< HEAD
      <Link className="sidebar" key={link.path} to={link.path}>
=======
      <Link key={link.path} to={link.path}>
>>>>>>> d49fb488b58c75ffe9593075cdbcb7a6d8ae9078
        {link.label}
      </Link>
    );
  });

<<<<<<< HEAD
  return <div className="sidebar">{renderedLinks}</div>;
=======
  return <div>{renderedLinks}</div>;
>>>>>>> d49fb488b58c75ffe9593075cdbcb7a6d8ae9078
}

export default Sidebar;

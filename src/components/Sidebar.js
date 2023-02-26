import Link from './Link';

function Sidebar() {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'Button', path: '/button' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Dropdown', path: '/dropdown' },
    { label: 'Modal', path: '/modal' },
  ];

  const renderedLinks = links.map(link => {
    return (
      <Link className="sidebar" key={link.path} to={link.path}>
        {link.label}
      </Link>
    );
  });

  return <div className="sidebar">{renderedLinks}</div>;
}

export default Sidebar;

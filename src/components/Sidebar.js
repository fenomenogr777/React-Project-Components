import Link from './Link';

function Sidebar() {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'Button', path: '/button' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Dropdown', path: '/dropdown' },
  ];

  const renderedLinks = links.map(link => {
    return (
      <Link key={link.path} to={link.path}>
        {link.label}
      </Link>
    );
  });

  return <div>{renderedLinks}</div>;
}

export default Sidebar;

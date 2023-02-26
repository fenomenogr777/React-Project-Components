import { useState, useEffect, useRef } from 'react';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    // GUARD
    if (!divEl.current) {
      return;
    }
    const handleClickClose = e => {
      if (!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickClose);

    return () => {
      document.removeEventListener('click', handleClickClose);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelected = value => {
    onChange(value);
    setIsOpen(false);
  };

  const renderedOptions = options.map(option => {
    return (
      <div key={option.value} onClick={() => handleSelected(option.label)}>
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl}>
      <div onClick={handleClick}>{value ?? 'Selected...'}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;

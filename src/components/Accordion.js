import { useState, useRef, useEffect } from 'react';

function Accordion({ value, onChange }) {
  const [isExpanded, setIsxpanded] = useState(-1);

  const divEl = useRef();

  useEffect(() => {
    // CLOSE WHEN CLICK IS SOMEWHERE ELSE
    const handleClickClose = e => {
      // GUARD IN CASE IS NULL/UNDEFINED
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(e.target)) {
        setIsxpanded(-1);
      }
    };
    document.addEventListener('click', handleClickClose);
    return () => {
      document.removeEventListener('click', handleClickClose);
    };
  }, []);

  const handleClick = itemNum => {
    setIsxpanded(itemNum);
    if (itemNum === isExpanded) {
      setIsxpanded(-1);
    }
  };

  const renderedItems = value.map((value, index) => {
    return (
      <div key={value.id} onClick={() => handleClick(index)}>
        <div>{value.label}</div>
        {isExpanded === index && <div>{value.content}</div>}
      </div>
    );
  });

  return <div ref={divEl}>{renderedItems}</div>;
}

export default Accordion;

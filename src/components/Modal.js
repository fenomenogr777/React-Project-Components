import ReactDOM from 'react-dom';

function Modal({ value, onChange }) {
  const handleClick = () => {
    onChange();
  };

  const renderedValue = value.map(value => {
    return (
      <div key={value.content} className="modal">
        <h2>{value.label}</h2>
        <p>{value.content}</p>
        <button onClick={handleClick}>close</button>
      </div>
    );
  });

  return ReactDOM.createPortal(
    <div>
      <div onClick={onChange} className="overlay"></div>
      <div>{renderedValue}</div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;

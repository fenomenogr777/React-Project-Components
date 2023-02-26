import Modal from '../components/Modal';
import Button from '../components/Button';
import { useRef, useState } from 'react';

function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();

  const value = [{ label: 'titlos', content: 'keimeno' }];

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={divEl}>
      <Button onClick={handleClick}>Open Modal</Button>
      {isOpen && <Modal value={value} onChange={closeModal} />}
    </div>
  );
}

export default ModalPage;

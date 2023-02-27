import Modal from '../components/Modal';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';

function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const modal = (
    <Modal
      onClose={closeModal}
      actionBar={
        <Button
          onClick={closeModal}
          variant="contained"
          color="error"
          size="small"
        >
          close
        </Button>
      }
    >
      <Typography variant="h5" color="initial" paragraph>
        Important text keimeno edo mesa
      </Typography>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} variant="contained" color="primary" sx={{m:2}}>
        Open Modal
      </Button>
      {isOpen && modal}
    </div>
  );
}

export default ModalPage;

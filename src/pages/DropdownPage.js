import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
  const [value, setValue] = useState(null);

  const handleOnchange = newValue => {
    setValue(newValue);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
  ];

  return <Dropdown options={options} value={value} onChange={handleOnchange} />;
}

export default DropdownPage;

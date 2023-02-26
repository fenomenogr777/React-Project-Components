import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    { label: 'Section 1', content: '111111111111', id: 'fc34f34' },
    { label: 'Section 2', content: '22222222222', id: 'ffsdsfd' },
    { label: 'Section 3', content: '3333333333', id: 'fc34fdsf' },
  ];

  return (
    <div>
      <Accordion value={items} />
    </div>
  );
}

export default AccordionPage;

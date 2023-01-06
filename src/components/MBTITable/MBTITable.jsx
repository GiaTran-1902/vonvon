import { useState, useEffect } from 'react';

import RadioInput from 'components/Input/RadioInput';

const MBTIs = [
  {
    listIds: ['E', 'I'],
    name: 'EI',
    checked: '',
  },
  {
    listIds: ['N', 'S'],
    name: 'NS',
    checked: '',
  },
  {
    listIds: ['F', 'T'],
    name: 'FT',
    checked: '',
  },
  {
    listIds: ['P', 'J'],
    name: 'PJ',
    checked: '',
  },
];

const MBTITable = ({ initMBTIs = [], onChange = () => {} }) => {
  const [mbtis, setMBTIs] = useState([]);

  const handleUpdate = (id, name) => {
    //update the new id of initMBTIs.
    MBTIs.forEach((item, index) => {
      if (item.name === name) {
        return (initMBTIs[index] = id);
      }
    });
    //re render the initMBTIs
    onChange([...initMBTIs]);
  };

  useEffect(() => {
    if (initMBTIs?.length) {
      // render the new MBTIs
      const newMBTIs = JSON.parse(JSON.stringify(MBTIs)).map((item, index) => {
        item.checked = initMBTIs[index];
        return item;
      });
      setMBTIs(newMBTIs);
    }
  }, [initMBTIs]);

  return (
    <>
      <div className="mbtitable">
        {mbtis.map((item, index) => (
          <RadioInput
            key={index}
            listIds={item.listIds}
            name={item.name}
            checked={item.checked}
            onChange={e => handleUpdate(e.target.value, item.name)}
          />
        ))}
      </div>
    </>
  );
};
export default MBTITable;

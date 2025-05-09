import React, { useEffect, useState } from 'react';
import { apiGet } from '../utils/api';

function Spells() {
  const [spells, setSpells] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await apiGet('spells');
      setSpells(data);
    }
    fetchData();
  }, []);
return (
    <ul>
      {spells.map(spell => (
        <li><strong>{spell.name}</strong> - {spell.description}</li>
      ))}
    </ul>
  );
}

export default Spells;
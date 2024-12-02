import React, { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [runType, setRunType] = useState('normal');
  const [runs, setRuns] = useState(0);
  const [batsmanName, setBatsmanName] = useState('');
  const [bowlerName, setBowlerName] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/scores/update', {
        type: runType,
        runs,
        batsmanName,
        bowlerName,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <select value={runType} onChange={(e) => setRunType(e.target.value)}>
        <option value="normal">Normal ball </option>
        <option value="noball">No Ball</option>
        {/* Add more options here */}
      </select>
      
      <input type="number" value={runs} onChange={(e) => setRuns(Number(e.target.value))} />
      <input type="text" placeholder="Batsman Name" value={batsmanName} onChange={(e) => setBatsmanName(e.target.value)} />
      <input type="text" placeholder="Bowler Name" value={bowlerName} onChange={(e) => setBowlerName(e.target.value)} />

      <button onClick={handleSubmit}>Update Score</button>
    </div>
  );
};

export default AdminPanel;
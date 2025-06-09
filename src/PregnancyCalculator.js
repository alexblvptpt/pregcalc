import React, { useState } from 'react';

const PregnancyCalculator = () => {
  const [lmp, setLmp] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [currentWeek, setCurrentWeek] = useState('');

  const calculate = (e) => {
    e.preventDefault();
    if (lmp) {
      const lmpDate = new Date(lmp);

      // Calculate Due Date (LMP + 280 days)
      const dueDateCalc = new Date(lmpDate.getTime() + (280 * 24 * 60 * 60 * 1000));
      setDueDate(dueDateCalc.toDateString());

      // Calculate Current Week of Pregnancy
      const today = new Date();
      const timeDiff = today.getTime() - lmpDate.getTime();
      const week = Math.floor(timeDiff / (1000 * 3600 * 24 * 7));
      setCurrentWeek(week);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px', margin: '20px auto' }}>
      <h2>Pregnancy Calculator 🤰</h2>
      <form onSubmit={calculate}>
        <label htmlFor="lmp">First Day of Last Menstrual Period:</label>
        <input
          type="date"
          id="lmp"
          value={lmp}
          onChange={(e) => setLmp(e.target.value)}
          style={{ margin: '10px 0', display: 'block', width: '100%', padding: '8px' }}
        />
        <button type="submit" style={{ padding: '10px 15px', cursor: 'pointer', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px' }}>Calculate</button>
      </form>
      {dueDate && (
        <div style={{ marginTop: '20px' }}>
          <h3>Results:</h3>
          <p><strong>Estimated Due Date:</strong> {dueDate}</p>
          <p><strong>You are approximately in week:</strong> {currentWeek} of your pregnancy.</p>
        </div>
      )}
    </div>
  );
};

export default PregnancyCalculator;

import { useState, useEffect } from 'react';

const DblClick = () => {
  useEffect(() => {
    const dblclick = () => alert('double clicked!');

    window.addEventListener('dblclick', dblclick);

    // Perform a clean up remove event listeners
    return () => window.removeEventListener('dblclick', dblclick);
  }, []);

  return <div>DblClick</div>;
};

const WindowEvents = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(false);
    }, 3000);

    // Perform a clean up remove event listeners
    return () => clearTimeout(timeoutId);
  }, []);

  return visible ? <DblClick /> : null;
};

export default WindowEvents;

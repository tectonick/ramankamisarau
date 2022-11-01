import React, { useState, useEffect } from 'react';

function Bio() {
  const [BioText, setBioText] = useState("");

  useEffect(() => {
    setBioText("Lorem ipsum");
  }, []);

  return (
    <div className="Bio">
      <h2>BIOGRAPHY</h2>
      {BioText}
    </div>
  );
}

export default Bio;

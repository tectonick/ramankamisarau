import React, { useState, useEffect } from 'react';
import Api from "../Utility/api";

function Bio() {
  const [BioText, setBioText] = useState("");

  useEffect(() => {
    Api.getBioText().then((data)=>{
      setBioText(data ?? "");
    })
  }, []);

  return (
    <div className="Bio">
      <h2>BIOGRAPHY</h2>
      <pre>{BioText}</pre>
    </div>
  );
}

export default Bio;

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
    <div className="bio block">
      <h2>BIOGRAPHY</h2>
      <div className='html-content' dangerouslySetInnerHTML={{ __html: BioText }} />
    </div>
  );
}

export default Bio;

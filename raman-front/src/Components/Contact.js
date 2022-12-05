import React, { useState, useEffect } from "react";
import Api from "../Utility/api";

function ContactInfo() {
  const [ContactData, setContactData] = useState({});

  useEffect(() => {
    Api.getContactData().then((data) => {
      setContactData(data);
    });
  }, []);

  return (
    <div className="contact-info block">
      {ContactData && <p>{ContactData.Text}</p>}
      {ContactData && (
        <a href={"mailto:" + ContactData.Email}>Email: {ContactData.Email}</a>
      )}{" "}
      {ContactData && (
        <a href={"tel:" + ContactData.Phone}>Tel: {ContactData.Phone}</a>
      )}
    </div>
  );
}

export default ContactInfo;

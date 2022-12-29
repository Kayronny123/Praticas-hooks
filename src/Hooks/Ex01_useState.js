import React, { useState } from "react";

function Ex01_useState() {
  const [texto, setTexto] = useState("Hello world");
  const evento = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={evento} />
      <p>{texto}</p>
    </div>
  );
}
export default Ex01_useState;

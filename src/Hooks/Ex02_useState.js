import React, { useState } from "react";

function Ex02_useState() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  return (
    <div>
      <input
        type="text"
        placeholder="nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        placeholder="idade"
        onChange={(e) => setIdade(e.target.value)}
      />
      <p>{nome}</p>
      <p>{idade}</p>
    </div>
  );
}
export default Ex02_useState;

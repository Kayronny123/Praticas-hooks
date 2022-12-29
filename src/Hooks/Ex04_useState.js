import React, { useState } from "react";

function Ex04_useState() {
  const modelo = { nome: "", email: "", cidade: "" };

  const [formulario, setFormulario] = useState(modelo);

  const evento = (e) => {
    let nome = e.target.name;
    let valor = e.target.value;
    setFormulario({ ...formulario, [nome]: valor });
  };

  return (
    <div>
      <input type="text" name="nome" placeholder="nome" onChange={evento} />
      <input type="text" name="email" placeholder="email" onChange={evento} />
      <input type="text" name="cidade" placeholder="cidade" onChange={evento} />

      <p>{formulario.nome}</p>
      <p>{formulario.email}</p>
      <p>{formulario.cidade}</p>
    </div>
  );
}

export default Ex04_useState;

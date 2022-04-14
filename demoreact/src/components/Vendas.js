
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function Vendas() {
  const { nome, sobrenome } = useParams();

  // const location = useLocation();
  // const [domain, setDomain] = useState(new URLSearchParams(window.location.search).get('domain'));
  return (

    <>
      <div >
        Vendas!
      </div>
      <h1>Seu nome {nome}</h1>
      <h1>Sobrenome {sobrenome}</h1>
      {/* <h3>path: {location.pathname}</h3> */}

    </>
  );
}

export default Vendas;
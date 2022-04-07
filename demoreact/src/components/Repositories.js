
import { getRepotorios } from '../api/api';
import React, { useEffect, useState } from 'react'

function Repositories() {
  const [repo, setRepo] = useState([]);
  useEffect(async () => {
    const repos = await getRepotorios();
    setRepo(repos);
  }, [])
  return (
    <div className="Repositories">
      <div> {repo.map((rep, index) => {
        return <div key={index} style={{ margin: 10, border: '1px solid red' }}>
          <span>Reposotorio: {index} - {rep.name} </span><br />
          <span>Descricao: -{rep.description}</span>
        </div>
      }
      )}
      </div>
    </div>
  );
}
export default Repositories;

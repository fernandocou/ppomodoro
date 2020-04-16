import React from 'react';

function BtnComponent(props) {
  return (
    <div>
      
      {(props.status === 0)? 
        <button className="stopwatch-btn stopwatch-btn-gre"
        onClick={props.start}>Iniciar</button> : ""
      }

      {(props.status === 1)? 
        <div>
          <button className="stopwatch-btn stopwatch-btn-red"
                  onClick={props.stop}>Parar</button>
          <button className="stopwatch-btn stopwatch-btn-yel"
                  onClick={props.reset}>Reinciar</button>
        </div> : ""
      }

     {(props.status === 2)? 
        <div>
          <button className="stopwatch-btn stopwatch-btn-gre"
                  onClick={props.resume}>Continuar</button>
          <button className="stopwatch-btn stopwatch-btn-yel"
                  onClick={props.reset}>Reiniciar</button>
        </div> : ""
      }
     
    </div>
  );
}

export default BtnComponent;
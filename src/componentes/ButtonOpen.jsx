import axios from "axios";
import React, { useEffect } from "react";
import "./../App.css";
const ButtonOpen = (props) => {


  const handleGet = async () => {
    let result = undefined;
    try {
      result = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    } catch (errro) {
      result = {};
    }
    let resultlist=[];
    for(let i=0; i<10;i++){
        resultlist.push(result.data);
    }
props.sendParent(resultlist);

    //aqui se lo envio al compo. padre

  };
  return (
    <div>
      <button className="button primary" onClick={handleGet}>
        Llamada Axios
      </button>
    </div>
  );
};

export default ButtonOpen;

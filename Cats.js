import React, { useState, useEffect } from "react"
import axios from "axios"

const FetchCat = () => {
  const [cat, setCat] = useState([]);

  const getCat = async () => {
    let url = "https://api.thecatapi.com/v1/images/search";
    let response = await axios.get(url).then((res) => {
      setCat(res.data[0].url);
    });
    return response;
  };
  console.log(cat);
  useEffect(() => {
    getCat();
  }, []);

  return (
    <div>
      <button className="btn" onClick={getCat}>
        Random cat me!{" "}
      </button>
      <br></br>
      <img src={cat} alt="random cat" />
    </div>
  );
};

export default FetchCat;
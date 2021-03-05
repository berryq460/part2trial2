import React, { useState, useEffect } from "react";
import axios from "axios";

const CatSearch = () => {
  const [breed, setBreed] = useState([]);
  const [search, setSearch] = useState("");

  const fetchBreed = async () => {
    
    let url = `https://api.thecatapi.com/v1/images/search?breed_ids=${search}`;
    let response = await axios.get(url).then((res) => {
      console.log(res.data);
      setBreed(res.data);
    });
    return response;
  };
  console.log(search);

  useEffect(() => {
    fetchBreed();
  }, []);

  return (
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button onClick={fetchBreed}> Search</button>
      <img src={breed.image} alt="search for cat" />
    </div>
  );
};

export default CatSearch;
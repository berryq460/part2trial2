import React, { useState, useEffect } from "react"
import axios from "axios"
// import '../App.css';

function Dogs() {

  const [dog, setDog] = useState({});
  const url = "https://dog.ceo/api/breeds/image/random"

  const gImage = async () => {
    const response = await axios.get(url);
    console.log(response)
    setDog(response.data.message)
  }
  useEffect(() => {
    gImage()
  }, [])


  return (
    <div>

      <h3>Generate Dog Now </h3>
      <button onClick={() => gImage()}>Woof !</button>
      <br />
      <img src={dog} />
    </div>
  );
}

export default Dogs;
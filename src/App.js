import React from "react";
import "./App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
const axios = require("axios");

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Container = styled.div`
  height: auto;
  width: 80vh;
  padding: 5em;
`;

const CoolBackground = styled.div`
  height: auto;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to left bottom,
    #355C7D,
    #6C5B7B,
    #355C7D
  );
`;

function App() {
  const [data, setData] = useState("Data");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=krbpcHPEGT17nSngcBn42n2chF1bgvgtSnraVZuW")
        .then(res => {
          console.log(res.data);
          setData(res.data);
        })
        .catch(err => console.log("Error message", err));
    };

    fetchData();
  }, []);

  return (
    <CoolBackground>
      <Container>
        <h1>{data.title}</h1>
        <h4>This is today's image of the day for {data.date}</h4>
        <p>Photo by: {data.copyright}</p>
        <Img src={data.url} />
        <p>{data.explanation}</p>
        
      </Container>
    </CoolBackground>
  );
}

export default App;

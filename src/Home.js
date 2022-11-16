import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import Header from "./Header";

const Home = () => {
  const cookies = new Cookies();
  const token = cookies.get('myToken');
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get('http://216.230.74.17:8013/api/Client' , {
        headers: { Authorization: `Bearer ${token}` },
        Accept: "*/*",
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => error.message);
  }, [token]);
  return (
    <div>
      <Header />

      <div>{data?.map((d) => (
       <h3 key={d?.clientcode}>{d?.clientname}</h3>
      ))}</div>
    </div>
  );
};

export default Home;

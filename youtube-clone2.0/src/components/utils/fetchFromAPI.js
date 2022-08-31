import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
// const  REACT_APP_API  = process.env.REACT_APP_API;
// console.log(REACT_APP_API); 

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

import { newsApiBaseUrl, APIKey } from "./constants";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

const getCurrentDate = () => {
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
return `${year}-${month}-${day}`;
};

const getDateSevenDaysAgo = () => {
const sevenDaysAgo = new Date();
sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
const year = sevenDaysAgo.getFullYear();
const month = String(sevenDaysAgo.getMonth() + 1).padStart(2, '0');
const day = String(sevenDaysAgo.getDate()).padStart(2, '0');
return `${year}-${month}-${day}`;
}

export const searchNews = (query) => {
  const url = `${newsApiBaseUrl}?q=${query}&from=${getDateSevenDaysAgo()}&to=${getCurrentDate()}&pageSize=100&apiKey=${APIKey}`;
  return fetch(url).then(checkResponse);
};
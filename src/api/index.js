import axios from "axios";

let today = new Date();
let last30Days = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 30
);
const index = 0;
const PageIndex = index + 1;
let finalDate = last30Days.toJSON().slice(0, 10);

// const test =
//   "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=2&per_page=100";
const url = `https://api.github.com/search/repositories?q=created:>${finalDate}&sort=stars&order=desc&page=${PageIndex}&per_page=100`;

export const fetchData = async () => {
  try {
    const data = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Repositories from "./components/Repositories";

function App() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetching the Github Api
  const fetchApi = async () => {
    /* Last 30 days Repos*/
    let today = new Date();
    let last30Days = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 30
    );
    let finalDate = last30Days.toJSON().slice(0, 10);
    const url = `https://api.github.com/search/repositories?q=created:>${finalDate}&sort=stars&order=desc&page=${currentPage}&per_page=100`;
    const {
      data: { items },
    } = await axios.get(url);
    setItems(items);
  };
  const DataScrolling = () => {
    setCurrentPage(currentPage + 1);
  };
  useEffect(() => {
    fetchApi();
  }, [currentPage]);

  return (
    <div className="App">
      <Repositories DataScrolling={DataScrolling} items={items} />
    </div>
  );
}

export default App;

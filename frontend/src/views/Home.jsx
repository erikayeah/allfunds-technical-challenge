import { useEffect, useState } from "react";
import { setContext } from "svelte";
import Loading from "../components/loading/Loading";
import NavBar from "../components/navBar/NavBar";
import axios from "axios";

const Home = () => {
  const API_URL = "http://localhost:5100/news";

  const [loading, setLoading] = useState(true);
  const [newsList, setNews] = useState([]);

  const getNews = async () => {
    try {
      const response = await axios.get(`${API_URL}/`);
      console.log("Response data:", response.data);
      setNews(response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    getNews();
    console.log("News:", newsList);
    setLoading(false);
  }, []);

  return (
    <div>
      <NavBar />
      {loading ? <Loading /> : <h1> ALL NEWS</h1>}
    </div>
  );
};

export default Home;

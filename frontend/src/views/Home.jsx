import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from "../components/loading/Loading";
import NavBar from "../components/navBar/NavBar";
import NewsList from "../components/newsList/NewsList";
import axios from "axios";

const Home = () => {
  const API_URL = "http://localhost:5100/news";

  const [loading, setLoading] = useState(true);
  const [allNewsList, setAllNews] = useState([]);

  const getAllNews = async () => {
    try {
      const response = await axios.get(`${API_URL}/`);
      const filteredNews = response.data.filter((news) => !news.archiveDate);

      const sortedNews = filteredNews.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setAllNews(sortedNews);
      if (loading) {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const buttonArchive = async (id) => {
    try {
      await axios.patch(`${API_URL}/${id}`, {
        archiveDate: new Date().toISOString(),
      });
      getAllNews();
    } catch (error) {
      console.error("Error archiving news", error);
    }
  };

  const confirmArchive = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, archive it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          buttonArchive(id);
          Swal.fire({
            title: "Archived!",
            text: "News has been archived.",
            icon: "success",
          });
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: "Could not archive.",
            icon: "error",
          });
        }
      }
    });
  };

  useEffect(() => {
    getAllNews();
    const interval = setInterval(getAllNews, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <NewsList allNewsList={allNewsList} confirmArchive={confirmArchive} />
        </>
      )}
    </div>
  );
};

export default Home;

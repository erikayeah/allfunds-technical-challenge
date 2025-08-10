import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from "../components/loading/Loading";
import NavBar from "../components/navBar/NavBar";
import NewsList from "../components/newsList/NewsList";
import axios from "axios";

const ArchivedNews = () => {
  const API_URL = "http://localhost:5100/news";

  const [loading, setLoading] = useState(true);
  const [allNewsList, setAllNews] = useState([]);

  const getAllNews = async () => {
    try {
      const response = await axios.get(`${API_URL}/`);
      const filteredNews = response.data.filter((news) => news.archiveDate);
      const sortedNews = filteredNews.sort(
        (a, b) => new Date(b.archiveDate) - new Date(a.archiveDate)
      );
      setAllNews(sortedNews);
      if (loading) {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const buttonDelete = async (id, date) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      getAllNews();
    } catch (error) {
      console.error("Error archiving news", error);
    }
  };

  const confirmRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          buttonDelete(id);
          Swal.fire({
            title: "Archived!",
            text: "News has been removed.",
            icon: "success",
          });
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: "Could not remove.",
            icon: "error",
          });
        }
      }
    });
  };

  useEffect(() => {
    getAllNews();
    const interval = setInterval(getAllNews, 5000);
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
          <NewsList allNewsList={allNewsList} confirmRemove={confirmRemove} />
        </>
      )}
    </div>
  );
};

export default ArchivedNews;

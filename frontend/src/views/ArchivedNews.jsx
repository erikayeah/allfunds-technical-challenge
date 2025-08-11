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

  const buttonRemove = async (id, date) => {
    try {
      await axios.delete(`${API_URL}/remove/${id}`);
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
          buttonRemove(id);
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

  const handleSortNewstOldest = (newOrder) => {
    const sorted = [...allNewsList].sort((a, b) => {
      const dateA = new Date(a.archiveDate);
      const dateB = new Date(b.archiveDate);
      return newOrder === "ascending" ? dateA - dateB : dateB - dateA;
    });
    setAllNews(sorted);
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
          <div className="d-flex justify-content-end">
            <select
              onChange={(event) => handleSortNewstOldest(event.target.value)}
              className="form-select w-auto my-3 d-flex justify-content-end me-5 my-1 py-0"
            >
              <option value="descending">Newest archived</option>
              <option value="ascending">Oldest archived</option>
            </select>
          </div>
          <NewsList allNewsList={allNewsList} confirmRemove={confirmRemove} />
        </>
      )}
    </div>
  );
};

export default ArchivedNews;

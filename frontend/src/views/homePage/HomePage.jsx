import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import Loading from "../../components/loading/Loading";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import NewsList from "../../components/newsList/NewsList";
import axios from "axios";

const HomePage = ({ type }) => {
  const API_URL = "http://localhost:5100/news";
  console.log("type,", type);

  const [loading, setLoading] = useState(true);
  const [allNewsList, setAllNews] = useState([]);

  const getAllNews = async () => {
    try {
      const response = await axios.get(`${API_URL}/`);

      const filteredNews =
        type === "active"
          ? response.data.filter((news) => !news.archiveDate)
          : response.data.filter((news) => news.archiveDate);

      const sortedNews =
        type === "active"
          ? filteredNews.sort((a, b) => new Date(b.date) - new Date(a.date))
          : filteredNews.sort(
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

  const handleSortNewstOldest = (newOrder) => {
    const sorted = [...allNewsList].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return newOrder === "ascending" ? dateA - dateB : dateB - dateA;
    });
    setAllNews(sorted);
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

  useEffect(() => {
    getAllNews();
    const interval = setInterval(getAllNews, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [type]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <div className="d-flex justify-content-end">
            <select
              defaultValue="descending"
              onChange={(event) => handleSortNewstOldest(event.target.value)}
              className="form-select w-auto my-3 d-flex justify-content-end me-5 my-1 py-0"
            >
              <option value="descending">Newest first</option>
              <option value="ascending">Oldest first</option>
            </select>
          </div>
          <NewsList
            allNewsList={allNewsList}
            confirmArchive={confirmArchive}
            confirmRemove={confirmRemove}
          />
        </>
      )}
      <Footer />
    </div>
  );
};

export default HomePage;

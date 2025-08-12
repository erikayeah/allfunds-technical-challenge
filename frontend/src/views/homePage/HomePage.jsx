import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import Loading from "../../components/loading/Loading";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import NewsList from "../../components/newsList/NewsList";
import axios from "axios";

const HomePage = ({ type }) => {
  const API_URL = `${import.meta.env.VITE_BACKEND_PORT}/news`;
  console.log("BACKEND URL:", API_URL);

  const [loading, setLoading] = useState(true);
  const [allNewsList, setAllNewsList] = useState([]);

  const getAllNews = async () => {
    try {
      const response = await axios.get(`${API_URL}/`);

      const filteredAndSortedNews = response.data
        .filter((news) =>
          type === "active" ? !news.archiveDate : news.archiveDate
        )
        .sort((a, b) =>
          type === "active"
            ? new Date(b.date) - new Date(a.date)
            : new Date(b.archiveDate) - new Date(a.archiveDate)
        );

      setAllNewsList(filteredAndSortedNews);

      if (loading) {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleSortNewstOldest = (newOrder) => {
    const sortedSelected = [...allNewsList].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return newOrder === "ascending" ? dateA - dateB : dateB - dateA;
    });
    setAllNewsList(sortedSelected);
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
  }, [type]);

  useEffect(() => {
    const socket = io(import.meta.env.VITE_BACKEND_PORT);

    socket.on("connect", () => {
      console.log(" connected to backend", socket.id);
    });

    socket.on("insertOne", (news) => {
      const shouldInclude =
        (type === "active" && !news.archiveDate) ||
        (type === "archived" && news.archiveDate);

      if (shouldInclude) {
        setAllNewsList((prevNews) => [news, ...prevNews]);
      }
    });

    socket.on("insertMany", (newsList) => {
      const filteredNews = newsList.filter((news) =>
        type === "active" ? !news.archiveDate : news.archiveDate
      );

      setAllNewsList((prevNews) => [...filteredNews, ...prevNews]);
    });

    return () => {
      socket.disconnect();
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
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomePage;

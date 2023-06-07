import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCharacters } from "../../Redux/axions/axions";
import Cards from "../Cards/Cards";
import Navar from "../Nav/Nav";
import styles from "./Home.module.css";
import Pagination from "react-bootstrap/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const { allCharacters, loading } = useSelector((state) => state);
  const { characters, currentPage, totalPages } = allCharacters;

  useEffect(() => {
    dispatch(getAllCharacters(currentPage));
  }, [dispatch, currentPage]);

  const renderPage = () => {
    const handlePageChange = (page) => {
      dispatch(getAllCharacters(page));
    };

    const handlePreviousClick = () => {
      if (currentPage > 1) {
        handlePageChange(currentPage - 1);
      }
    };

    const handleNextClick = () => {
      if (currentPage < totalPages) {
        handlePageChange(currentPage + 1);
      }
    };

    const items = [];
    for (let page = 1; page <= totalPages; page++) {
      items.push(
        <Pagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Pagination.Item>
      );
    }
    return (
      <Pagination>
        <Pagination.Prev onClick={handlePreviousClick} disabled={currentPage === 1} />
        {items}
        <Pagination.Next onClick={handleNextClick} disabled={currentPage === totalPages} />
      </Pagination>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.Nav}>
        <Navar />
      </div>
      <div>{renderPage()}</div>
      {loading ? (
        <div className={styles.imagen}>
          {" "}
          <img src="https://media.giphy.com/media/Opm31LCucRc3qG0VqB/giphy.gif" alt="loading" />{" "}
        </div>
      ) : (
        <div className={allCharacters.length ? styles.oneDiv : ""}>
          <Cards characters={characters} />
        </div>
      )}
    </div>
  );
};

export default Home;
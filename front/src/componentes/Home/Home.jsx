import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCharacters } from "../../Redux/axions/axions";
import Cards from "../Cards/Cards";
import Navar from "../Nav/Nav";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const { allCharacters, loading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.Nav}>
        <Navar />
      </div>
      {loading ? (
        <div className={styles.imagen}>
          {" "}
          <img src="https://media.giphy.com/media/Opm31LCucRc3qG0VqB/giphy.gif" alt="loading" />{" "}
        </div>
      ) : (
        <div className={allCharacters.length === 1 ? styles.oneDiv : ''}>
          <Cards characters={allCharacters} />
        </div>
      )}
    </div>
  );
};

export default Home;
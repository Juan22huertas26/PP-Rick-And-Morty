import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCharacters } from "../../Redux/axions/axions";
import Cards from "../Cards/Cards";
import Navar from "../Nav/Nav";
import styles from "./Home.module.css"

const Home = () => {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.allCharacters);

    useEffect(() => {
        dispatch(getAllCharacters())
    }, [dispatch])

    return(
        <div>
            <div className={styles.Nav}>
                <Navar/>
            </div>
            <Cards characters={characters} />
        </div>
    )

}


export default Home;
import React from "react";
import CardCH from "../Card/Card";
import styles from './Cards.module.css'


const Cards = ({ characters }) => {
    return(
        <div className={styles.cardsCont} >
            {characters?.map((character, index) => {
                return (
                    <CardCH character={character} key={index} />
                )
            })}
        </div>
    )
}

export default Cards;
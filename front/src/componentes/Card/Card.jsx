import React from "react";
import { Card } from "react-bootstrap";
import styles from './Card.module.css'

const CardCH = ({character}) => {
    const {id, name, status, image} = character

    return (
        <Card className={styles.container} style={{ borderRadius: "200px", backgroundColor: "rgba(70, 27, 27, 0.8)" }} >
          <Card.Img variant="top" src={image} alt={`${id}+${name}`} style={{ borderRadius: "200px" }}/>
          <Card.Body className={styles.card} >
            <Card.Title className={styles.title} style={{fontSize: "25px"}} >{name}</Card.Title>
            <Card.Text className={styles.text} >
              <strong>{status}</strong>
            </Card.Text>
          </Card.Body>
        </Card>
      );
};


export default CardCH;
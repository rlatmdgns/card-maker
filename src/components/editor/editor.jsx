import React from "react";
import CardAddForm from "../card_add_form/card_add_from";
import CardEditForm from "../card_edit_form/card_edit_from";
import styles from "./editor.module.css";
const Editor = ({ cards, addCard }) => {
  console.log(cards);
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => {
        return <CardEditForm key={card.id} card={card} />;
      })}
      <CardAddForm onAdd={addCard} />
    </section>
  );
};

export default Editor;

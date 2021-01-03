import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./maker.module.css";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "승훈",
      company: "flow",
      theme: "light",
      title: "publish",
      email: "rlatmdgns94@flow.tema",
      maessage: "go",
      fileName: "tmdgns",
      fileURL: null,
    },
    {
      id: "2",
      name: "승훈",
      company: "flow",
      theme: "dark",
      title: "publish",
      email: "rlatmdgns94@flow.tema",
      maessage: "go",
      fileName: "tmdgns",
      fileURL: "tmdgns.png",
    },
    {
      id: "3",
      name: "승훈",
      company: "flow",
      theme: "colorful",
      title: "publish",
      email: "rlatmdgns94@flow.tema",
      maessage: "go",
      fileName: "tmdgns",
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} addCard={addCard} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;

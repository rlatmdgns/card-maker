import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./maker.module.css";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });
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

  // const addCard = (card) => {
  //   const updated = [...cards, card];
  //   setCards(updated);
  // };
  // const updateCard = (card) => {
  //   const updated = { ...cards };
  //   updated[card.id] = card;
  //   setCards(updated);
  // };
  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    //콜백 함수 전달
    //이전에 cards를 받아서 리턴
    // state 가 오래 된거 이거나 , 동기적으로 할 수 없을 때
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;

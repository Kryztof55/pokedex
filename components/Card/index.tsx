import Image from "next/image";
import Title from "../Title";
import Caption from "../Caption";
import Paragraph from "../Paragraph";
import TypePill from "../TypePill";
import MainPanel from "../MainPanel";
import InfoPanel from "../InfoPanel";
import Bar from "../Bar";

import styles from "./Card.module.scss";

const Card = () => {
  const types = ["normal", "normal"];

  const info = [
    {
      title: "Altura",
      value: "1,0",
    },
    {
      title: "Altura",
      value: "1,0",
    },
    {
      title: "Altura",
      value: "1,0",
    },
    {
      title: "Altura",
      value: "1,0",
    },
  ];

  const stats = [
    {
      text: "HP",
      stat: "80",
    },
    {
      text: "HP",
      stat: "50",
    },
    {
      text: "HP",
      stat: "100",
    },
    {
      text: "HP",
      stat: "20",
    },
    {
      text: "HP",
      stat: "10",
    },
    {
      text: "HP",
      stat: "40",
    },
  ];
  return (
    <article className={styles.article}>
      <div className={styles.card}>
        <Image
          className={styles.cardImg}
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg"
          alt="Pokemon Name"
          width={150}
          height={150}
        />
        <Title className={styles.cardTitle} text="Pokemon" />
        <div className={styles.cardTypes}>
          {types.map((el, i) => (
            <TypePill key={i} type={el} />
          ))}
        </div>
        <MainPanel stats={stats} info={info} />
      </div>
      <Image
        className={styles.panelImg}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg"
        alt="Pokemon Name"
        width={150}
        height={150}
      />
    </article>
  );
};

export default Card;

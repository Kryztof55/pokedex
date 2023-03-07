import Image from "next/image";
import Title from "../Title";
import Caption from "../Caption";
import Paragraph from "../Paragraph";
import TypePill from "../TypePill";
import MainPanel from "../MainPanel";
import InfoPanel from "../InfoPanel";
import Bar from "../Bar";
//import { getPokeDetail } from "@/utils/axios";
import { getPokeDetail } from "../../utils/axios";
import { useQuery } from "react-query";

import styles from "./Card.module.scss";

interface CardProps {
  name: string;
}

const Card = ({ name }: CardProps) => {
  const {
    isLoading,
    isError,
    error,
    data: details,
  } = useQuery(["pokemon/", name], () => getPokeDetail(name), {
    keepPreviousData: true,
  });

  const POKE_IMG = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
    details?.id ? details?.id : "1"
  }.svg`;
  const POKE_NAME = details?.name ? details?.name : "Pokename";

  const info = [
    {
      title: "Height",
      value: `0,${details?.height} m`,
    },
    {
      title: "Weight",
      value: `${details?.weight + 0.1} kg`,
    },
    {
      title: "Ability",
      value: details?.abilities[0].ability.name,
    },
  ];

  return (
    <article className={styles.article}>
      <div className={styles.card}>
        <Image
          className={styles.cardImg}
          src={POKE_IMG}
          alt={POKE_NAME}
          width={150}
          height={150}
        />
        <Title className={styles.cardTitle} text={name} />
        <div className={styles.cardTypes}>
          {details?.types.map((el, i) => (
            <TypePill key={i} type={el.type.name} />
          ))}
        </div>
        <MainPanel name={name} stats={details?.stats} info={info} />
      </div>
      <Image
        className={styles.panelImg}
        src={POKE_IMG}
        alt={POKE_NAME}
        width={150}
        height={150}
      />
    </article>
  );
};

export default Card;

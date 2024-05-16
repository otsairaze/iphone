import React, { FC, useState } from "react";
import styles from "./Card.module.css";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeActive, setLike } from "../../store/reducers/products";
import { addCart } from "../../store/reducers/cart";

type ICard = {
  id: number;
  imageUrl: string;
  title: string;
  active: boolean;
};

const Card: FC<ICard> = ({ imageUrl, title, id }) => {
  const getItem = useAppSelector((state) =>
    state.products.value.find((item) => item.id === id && item.like)
  );

  const getActive = useAppSelector((state) =>
    state.products.value.find((item) => item.id === id && item.active)
  );

  const [onActive, setOnActive] = useState(false);
  const [active, setActive] = useState(false);

  const dispatch = useAppDispatch();

  return (
    <>
      <div className={styles.wrapper}>
        <button className={styles.img}>
          <img
            onClick={() => {
              setActive((active) => !active);
              dispatch(
                setLike({
                  id: id,
                  like: !active,
                })
              );
            }}
            src={
              getItem ? "public/Product/like.png" : "public/Product/unlike.png"
            }
            alt=""
          />
        </button>
        <div className={styles.inner}>
          <img src={imageUrl} alt="" className={styles.phone} />
          <p className={styles.text}>{title}</p>
        </div>
        <button
          onClick={() => {
            setOnActive((onActive) => !onActive);
            dispatch(
              changeActive({
                id: id,
                active: !onActive,
              })
            );
            dispatch(
              addCart({
                id: id,
                title: title,
                image: imageUrl,
              })
            );
          }}
          className={`${styles.btn} ${onActive ? styles.btn__active : ""}`}
        >
          Добавить в корзину
        </button>
      </div>
    </>
  );
};

export default Card;

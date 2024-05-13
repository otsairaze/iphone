import React, { FC, useState } from "react";
import styles from "./Card.module.css";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setLike } from "../../store/reducers/products";

type ICard = {
  imageUrl: string;
  title: string;
  likeUrl: string;
  id: number;
};

const Card: FC<ICard> = ({ imageUrl, title, onActive, id }) => {
  const getItem = useAppSelector((state) => state.products.value).find(
    (item) => item.id === id
  );

  const [active, setActive] = useState(false);

  const dispatch = useAppDispatch();

  return (
    <>
      <div className={styles.wrapper}>
        <button className={styles.img}>
          <img
            onClick={() => {
              setActive(!active);
              dispatch(
                setLike({
                  id: id,
                  like: active,
                })
              );
            }}
            src={
              active
                ? "../../../public/Product/like.png"
                : "../../../public/Product/unlike.png"
            }
            alt=""
          />
        </button>
        <div className={styles.inner}>
          <img src={imageUrl} alt="" className={styles.phone} />
          <p className={styles.text}>{title}</p>
        </div>
      </div>
    </>
  );
};

export default Card;

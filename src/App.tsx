import "./style.css";
import Header from "./components/Header/Header";
import Ad from "./components/Ad/Ad";
import Card from "./components/Card/Card";
import axios from "axios";
import React, { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { addProducts } from "./store/reducers/products";

type ICard = {
  imageUrl: string;
  title: string;
  likeUrl: string;
};

function App() {
  const [items, setItems] = React.useState([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get("https://65c3afef39055e7482c16929.mockapi.io/Item")
      .then((response) => {
        setItems(response.data);
        dispatch(addProducts(response.data));
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        <Ad />
        <div className="inner">
          {items.map((obj) => (
            <>
              <Card
                key={obj.id}
                id={obj.id}
                imageUrl={obj.imageUrl}
                title={obj.title}
                likeUrl={obj.likeUrl}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

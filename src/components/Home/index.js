import React, { useState, useEffect } from "react";
import {
  HomeContainer,
  HomeContent,
  HomeCard,
  CardTitle,
  CardImage,
  CardDescription,
  FirstLine,
  SecondLine,
} from "./HomeElements";

const Home = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const fetchResponse = await fetch(
        "https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context-embed"
      );
      const data = await fetchResponse.json();
      if (!data) {
        console.log("Something went wrong");
        return;
      }

      const infoArray = data;

      const newCards = infoArray.map((card, i) => (
        <HomeCard>
          <CardTitle>Title</CardTitle>
          <CardImage></CardImage>
          <CardDescription>
            <FirstLine>
              <span>DESCRIPTION</span>
              <span>Date</span>
            </FirstLine>
            <SecondLine>
              <button>Edit</button>
              <button>Delete</button>
            </SecondLine>
          </CardDescription>
        </HomeCard>
      ));
      setCards(newCards);
    }
    fetchData();
  }, []);

  return (
    <HomeContainer>
      <HomeContent>{cards}</HomeContent>
    </HomeContainer>
  );
};

export default Home;

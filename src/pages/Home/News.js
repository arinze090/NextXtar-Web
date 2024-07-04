import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import NewsCard from "../../components/cards/NewsCard";
import { baseURL } from "../../utils/api-client";
import { API_KEY } from "../../utils/devKeys";
import SkeletonLoader from "../../components/common/SkeletonLoader";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

function News() {
  const [hotNewsData, setHotNewsData] = useState();

  const [loading, setLoading] = useState(false);

  const getHotNews = async () => {
    setLoading(true);

    const form = new FormData();
    form.append("limit", 20);
    form.append("page", 1);

    try {
      await axios
        .post(`${baseURL}hotnews.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          // console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            // console.log("getHotNews data", res?.data);
            setHotNewsData(res?.data);
          } else {
            // console.log("getHotNews message", res?.data?.status);
          }
        })
        .catch((err) => {
          // console.log("getHotNews err", err);
          setLoading(false);
        });
    } catch (error) {
      // console.log("getHotNews error", error);
    }
  };

  useEffect(() => {
    getHotNews();
  }, []);

  return (
    <div
      style={{
        margin: "0 auto",
        padding: "2rem",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
      }}
    >
      {loading ? (
        <SkeletonLoader />
      ) : (
        <Container>
          {hotNewsData &&
            hotNewsData?.hotnews?.map((card, index) => (
              <NewsCard
                key={index}
                title={card?.title}
                imgSrc={card?.FeatureImage}
                description={card?.Body}
                date={card?.DateCreated}
              />
            ))}
        </Container>
      )}
    </div>
  );
}

export default News;

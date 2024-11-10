import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import HeaderTitle from "../../components/common/HeaderTitle";
import SearchBar from "../../components/search/SearchBar";
import { API_KEY } from "../../utils/devKeys";
import { baseURL } from "../../utils/api-client";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #000;
  border-radius: 8px;
`;

function Search() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);

  const searchSingnify = async () => {
    console.log("dfjhfh");
    setLoading(true);

    const form = new FormData();
    form.append("q", searchValue);

    try {
      await axios
        .post(`${baseURL}search.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            console.log("searchSingnify data", res?.data);
            setSearchData(res?.data?.result);
          }
        })
        .catch((err) => {
          console.log("searchSingnify err", err);
          setLoading(false);
        });
    } catch (error) {
      console.log("searchSingnify error", error);
    }
  };

  useEffect(() => {
    if (searchValue) {
      searchSingnify();
    }
  }, [searchValue]);

  return (
    <Container>
      <HeaderTitle
        title={"Search"}
        imgSrc={require("../../assets/singnifySplashLogo.png")}
        imgAlt={"Search Image"}
      />
      <SearchBar
        width={"90%"}
        mobilewidth={"70%"}
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />

      {loading && <p>Loading...</p>}
    </Container>
  );
}

export default Search;

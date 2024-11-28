import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";

import HeaderTitle from "../../components/common/HeaderTitle";
import FormInput from "../../components/form/FormInput";
import { baseURL } from "../../utils/api-client";
import { API_KEY } from "../../utils/devKeys";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #000;
  padding-top: 80px;
`;

const Title = styled.p`
  color: #05a30b;
  font-size: 20px;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 3px;
  color: #ccc;
`;

function ReferralCode() {
  const state = useSelector((state) => state);
  const user = state?.user?.user;

  const [referralData, setReferralData] = useState();

  const [loading, setLoading] = useState(false);

  const getReferralInfo = async () => {
    setLoading(true);

    const form = new FormData();
    form.append("token", user?.Token);

    try {
      await axios
        .post(`${baseURL}get-referral-info.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            // console.log("getReferralInfo data", res?.data);
            setReferralData(res?.data);
          } else {
            // console.log("getReferralInfo message", res?.data?.status);
          }
        })
        .catch((err) => {
          // console.log("getReferralInfo err", err);
          setLoading(false);
        });
    } catch (error) {
      // console.log("getReferralInfo error", error);
    }
  };

  useEffect(() => {
    getReferralInfo();
  }, []);

  return (
    <Container>
      <HeaderTitle
        title={"Referral Earnings"}
        // imgSrc={require("../../assets/supatunezLogo.jpeg")}
        imgAlt={"Referral Image"}
      />
      <Title>Referral Earnings: $0.00</Title>
      <Description>
        You earn $1.00 per person you refer to Singnify.
      </Description>

      <FormInput
        type={"text"}
        formTitle={"Your Referral Code"}
        inputPlaceholder={""}
        inputId={"projectTitle"}
        value={loading ? "Loading ..." : referralData?.referralCode}
      />

      <FormInput
        type={"text"}
        formTitle={"Your Referral Link"}
        inputPlaceholder={""}
        inputId={"projectTitle"}
        value={loading ? "Loading ..." : referralData?.referralLink}
      />
    </Container>
  );
}

export default ReferralCode;

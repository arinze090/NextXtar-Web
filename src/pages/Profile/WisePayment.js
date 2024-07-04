import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HeaderTitle from "../../components/common/HeaderTitle";
import FormInput from "../../components/form/FormInput";
import FormButton from "../../components/form/FormButton";
import { baseURL } from "../../utils/api-client";
import { API_KEY } from "../../utils/devKeys";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 2rem;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    // background: red;
    flex-direction: column;
  }
`;

function WisePayment() {
  const state = useSelector((state) => state);
  const user = state.user.user;

  const [loading, setLoading] = useState(false);

  const [wiseDetails, setWiseDetails] = useState("");

  // Error states
  const [formError, setFormError] = useState("");
  const [wiseDetailsError, setWiseDetailsError] = useState("");

  const addWisePaymentMethod = async () => {
    const form = new FormData();
    form.append("token", user?.Token);
    form.append("wise_details", wiseDetails);
    form.append("bank_type", "wise");

    if (!wiseDetails) {
      setWiseDetailsError("Please add a wise account");
    } else {
      try {
        setLoading(true);

        await axios
          .post(`${baseURL}bank-info.php?API_KEY=${API_KEY}`, form)
          .then((res) => {
            setLoading(false);

            if (parseInt(res?.data?.status) == 200) {
              toast.success(
                "Your Wise Account details has been saved successful. "
              );
            } else {
              setFormError("Something went wrong, please try again later");
              toast.error("Something went wrong, please try again later");
            }
          })
          .catch((err) => {
            setLoading(false);
            toast.error("Failed to add Payment Method");
          });
      } catch (error) {
        toast.error("Failed to add Payment Method");
      }
    }
  };

  return (
    <Container>
      <HeaderTitle
        title={"Wise Payment"}
        imgSrc={require("../../assets/1.jpg")}
        imgAlt={"Wise Image"}
      />

      <FormInput
        formTitle={"Wise Email Address"}
        inputId={"wise-email"}
        inputPlaceholder={"Wise Email Address"}
        type={"email"}
        value={wiseDetails}
        onChange={(e) => {
          setWiseDetails(e.target.value);
          setFormError("");
          setWiseDetailsError("");
        }}
        width={"100%"}
        errorMessage={wiseDetailsError}
      />

      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <FormButton
          title={"Submit"}
          marginTop={40}
          marginLeft={"0px"}
          errorMessage={formError}
          loading={loading}
          onClick={addWisePaymentMethod}
        />
      </div>
    </Container>
  );
}

export default WisePayment;

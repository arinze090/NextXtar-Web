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
  background: #000;
  padding-top: 80px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    // background: red;
    flex-direction: column;
  }
`;

function PayPalPayment() {
  const state = useSelector((state) => state);
  const user = state.user.user;

  const [loading, setLoading] = useState(false);

  const [paypalEmail, setPaypalEmail] = useState("");

  // Error states
  const [formError, setFormError] = useState("");
  const [paypalEmailError, setPaypalEmailError] = useState("");

  const addPayPalPaymentMethod = async () => {
    const form = new FormData();
    form.append("token", user?.Token);
    form.append("paypal_email", paypalEmail);
    form.append("bank_type", "paypal");

    if (!paypalEmail) {
      setPaypalEmailError("Please add a paypal email");
    } else {
      try {
        setLoading(true);

        await axios
          .post(`${baseURL}bank-info.php?API_KEY=${API_KEY}`, form)
          .then((res) => {
            setLoading(false);

            if (parseInt(res?.data?.status) == 200) {

              toast.success("Your PayPal details has been saved successful. ");
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
        title={"PayPal Payment"}
        // imgSrc={require("../../assets/supatunezLogo.jpeg")}
        imgAlt={"Payment Image"}
      />

      <FormInput
        formTitle={"PayPal Email Address"}
        inputId={"paypal-email"}
        inputPlaceholder={"PayPal Email Address"}
        type={"email"}
        value={paypalEmail}
        onChange={(e) => {
          setPaypalEmail(e.target.value);
          setFormError("");
          setPaypalEmailError("");
        }}
        width={"100%"}
        errorMessage={paypalEmailError}
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
          onClick={addPayPalPaymentMethod}
          loading={loading}
          errorMessage={formError}
        />
      </div>
    </Container>
  );
}

export default PayPalPayment;

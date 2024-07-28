import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import HeaderTitle from "../../components/common/HeaderTitle";
import FormInput from "../../components/form/FormInput";
import FormButton from "../../components/form/FormButton";
import FormSelect from "../../components/form/FormSelect";
import Modal from "../../components/modal/Modal";
import { API_KEY } from "../../utils/devKeys";
import { baseURL } from "../../utils/api-client";
import SkeletonLoader from "../../components/common/SkeletonLoader";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

function SocialMediaDistribution() {
  const navigate = useNavigate();

  const state = useSelector((state) => state);
  const user = state?.user?.user;

  const paymentOptions = [
    {
      id: 1,
      name: "PayStack",
    },
    {
      id: 2,
      name: "Flutterwave International",
    },
    {
      id: 3,
      name: "Stripe",
    },
    {
      id: 4,
      name: "PayPal",
    },
  ];

  const deliveryTypeOptions = [
    {
      id: 1,
      name: "Express Delivery",
    },
    {
      id: 1,
      name: "Social Media Distribution + EXpress Delivery",
    },
  ];

  const [loading, setLoading] = useState(false);

  const [userTracks, setUserTracks] = useState();

  const [selectTrack, setSelectTrack] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  console.log("selectTrack", selectTrack);

  const [formError, setFormError] = useState("");
  const [selectTrackError, setSelectTrackError] = useState("");
  const [deliveryOptionError, setDeliveryOptionError] = useState("");
  const [paymentOptionError, setPaymentOptionError] = useState("");
  const [deliveryDateError, setDeliveryDateError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if (!selectTrack) {
      alert("Please select a track to promote");
      setFormError("Please select a track to promote");
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getUserTracks = async () => {
    setLoading(true);

    const form = new FormData();
    form.append("token", user?.Token);

    try {
      await axios
        .post(`${baseURL}user-tracks.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            setUserTracks(res?.data?.tracks);
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    } catch (error) {}
  };

  useEffect(() => {
    getUserTracks();
  }, []);

  return (
    <Container>
      <HeaderTitle
        title={"Social Media Distribution"}
        imgSrc={require("../../assets/gif3.gif")}
        imgAlt={"Express Image"}
      />

      {loading && <SkeletonLoader />}

      <FormSelect
        formTitle={"Select the track or album your would like to promote"}
        selectId={"trackPromo"}
        selectPlaceholder={"Select Track/Album"}
        options={userTracks}
        onChange={(e) => {
          e?.target?.value
            ? setSelectTrack(JSON?.parse(e?.target?.value))
            : setSelectTrack(null);

          setFormError("");
          setSelectTrackError("");
        }}
        errorMessage={selectTrackError}
      />

      <FormButton
        title={"Promote"}
        marginTop={40}
        marginLeft={"0px"}
        width={"100%"}
        onClick={openModal}
        errorMessage={formError}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Deliver to all Digital Music Stores within 24 hours"
      >
        <h4>Express Delivery Fee: $12.00</h4>
        <FormSelect
          formTitle={"Select Your Express Delivery Type"}
          selectId={"delivery-type"}
          selectPlaceholder={"Select"}
          options={deliveryTypeOptions}
          onChange={(e) => {
            setDeliveryOption(e.target.value);
            setFormError("");
            setPaymentOptionError();
          }}
          errorMessage={deliveryOptionError}
        />

        <FormInput
          type={"date"}
          formTitle={"Kindly Pick a Date to Go Live"}
          inputPlaceholder={""}
          inputId={"dattee"}
          value={deliveryDate}
          onChange={(e) => {
            setDeliveryDate(e.target.value);
            setFormError("");
            setDeliveryDateError("");
          }}
          errorMessage={deliveryDateError}
        />

        <FormSelect
          formTitle={"Select Your Preferred Payment Method"}
          selectId={"paymentMethod"}
          selectPlaceholder={"Select Payment Method"}
          options={paymentOptions}
          onChange={(e) => {
            setPaymentOption(e.target.value);
            setFormError("");
            setPaymentOptionError();
          }}
          errorMessage={paymentOptionError}
        />

        <div
          style={{
            justifyContent: "flex-end",
            display: "flex",
          }}
        >
          <FormButton title={"Purchase"} marginTop={40} marginLeft={"0px"} />
        </div>
      </Modal>

      <h4>Premium Services:</h4>
      <p>
        These services include: <br /> <br /> 1. 7 Digital <br /> 2. Audible
        Magic <br /> 3. Facebook/Instagram (Meta) <br /> 4. FLO <br />
        5. Netease, <br /> 6. SoundCloud, <br />
        7. SoundExchange <br /> 8. Tencent <br />
        9. TikTok <br />
        10. Vibe (which is under YG Plus) <br />
        11. YouTube Content ID/Audio Fingerprint
      </p>

      <h4>
        Things you should know about YouTube content ID and Audio fingerprint
      </h4>
      <p>
        Singnify will protect your intellectual property rights by using audio
        fingerprint technology and YouTube content ID. Audio fingerprinting and
        YouTube content ID allow Singnify to identify and track your music and
        other audio content, ensuring that it is not used without your
        permission. This technology creates a unique digital signature for your
        audio, which can then be compared against other audio files to determine
        if they are similar or identical. <br /> <br />
        By using audio fingerprinting and YouTube content ID, you can ensure
        that your content is protected and that any unauthorized use is quickly
        detected and addressed. This will give you peace of mind, knowing that
        your hard work and creativity are being protected. <br /> <br />
        Bear in mind this service does not give Singnify the ownership of your
        songs, you own and control your songs 100%. <br /> <br />
        "By accepting these terms, you grant Singnify the right to distribute
        their songs. You acknowledge that Singnify has the right to use, sell,
        and promote the songs as they see fit. The artist agrees to release
        Singnify from any liability related to the distribution and promotion of
        their songs."
      </p>
    </Container>
  );
}

export default SocialMediaDistribution;

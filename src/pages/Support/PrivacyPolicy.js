import React from "react";
import styled from "styled-components";

import HeaderTitle from "../../components/common/HeaderTitle";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

function PrivacyPolicy() {
  return (
    <Container>
      <HeaderTitle
        title={"Privacy Policy"}
        imgSrc={require("../../assets/2.jpg")}
        imgAlt={"PrivacyPolicy Image"}
      />
      <p>1. The Information We Collect</p>
      <p>
        In connection with the Services, we collect and store personal
        information from you when you: <br /> <br />
        - Visit our website <br />- Register on and use our app <br />- Upload
        music through our app <br />- Make a payout through our app and PayPal{" "}
        <br />- Contact customer support <br />- Connect to us through third
        party services <br />- Connect to third party services via us
      </p>

      <p>Registration Data</p>
      <p>
        When you create a user account with the Service, we will ask for
        username, artist name, password, mobile phone number, email address,
        date of birth, address, postal code and country. <br />
        If you connect to the Service using credentials from a third party like
        Google or Facebook, you authorize us to collect your authentication
        information, such as your username and encrypted access credentials. We
        may also collect other information available, like your name, profile
        picture, age, country, hometown, email address, date of birth and
        gender. <br />
        You can also voluntarily provide us with your Soundcloud, Instagram,
        Twitter account username.
      </p>
      <p>Music Upload</p>
      <p>
        When you upload music via our app, some additional personal information
        is provided by you when you do. This includes: <br />
        - Track or album titles <br />- Artwork <br />- Artist name <br />- Name
        of contributors (if applicable) <br />- Usage information
      </p>
      <p>
        When you use or interact with the Service, we collect information about
        how the Service is accessed and used. This information includes: <br />
        Information on how you interact with our Service content that you post
        to the Service; and technical data, which may include URL information,
        location, session time, cookie data, which ad platform you came from, IP
        address, and the device and network ID you are using to access or
        connect to the Service.
      </p>
      <p>Payment Data</p>
      <p>
        When you make a payout through our app, via PayPal, we may collect
        information like PayPal account name, address, email address and
        personal identification number. We only obtain information enough to be
        able to make the payout, to comply with our legal obligations and to
        prevent and detect fraud.
      </p>
      <p>Information from third party sources</p>
      <p>
        We may integrate with third party sources from time to time and may
        receive information about you from them. <br />
        If you choose to use features provided by Singnify that connect to your
        third-party online profiles, accounts or services, we may collect
        information upon your approval. For example, if you prelove a Singnify
        release on Spotify, we may collect information from Spotify about your
        listening activity.
      </p>

      <p>2. How We Use the Information We Collected</p>
      <p>
        We will process your information for the following purposes: <br />- to
        administrate your account, <br />- to enable and provide the Service
        and, if applicable, provide integration with a third party. <br />- to
        provide, personalize and improve your experience and any advertising
        made available on or outside the Service;
        <br />- to make sure the Service is technically functional and to
        develop new products and services. <br />- analyze your use of the
        service and how you interact with our ads to be able to make great
        business decisions. <br />- to communicate with you for Service-related
        or research purposes via emails, notifications, text messages, or other
        messages, which you have agreed to receive. <br />- to communicate with
        you, either directly or through one of our partners, for marketing and
        promotional purposes via emails, notifications, or other messages,
        subject to your consent. to enable and promote the Service, either
        within or outside the Service. <br />- to process your payouts and
        prevent or detect fraud <br />- to enforce this Privacy Policy, the
        Terms of Use and any other terms that you have agreed to, including to
        protect the rights, property, or safety of Singnify, its users, or any
        other person, or the copyright-protected content of the Service. as
        otherwise stated in this Privacy Policy.
      </p>

      <p>3. For How Long Do We Store It?</p>
      <p>
        The data we collect from you will be held for as long as: <br /> You use
        our Service <br />- We have to because of legal reasons <br />- We need
        to process any payment <br />- We need to, to prevent fraud and other
        crimes
      </p>

      <p>4. How We Share Information</p>
      <p>Music platforms or services and partners</p>
      <p>
        The information you provide us with when you register and upload a song
        via our app, will be used to perform and provide our Service, by
        delivering it to the music services, platforms and partners. When
        delivering the music to the platforms, we provide them with: <br />{" "}
        <br />- ISRC (International Standard Recording Code). A unique code
        created for every individual track. <br />- UPC (Universal Product
        Code). A unique code created to summarize the release on a product
        level. <br />- Track or album titles <br />- Artwork
        <br />- Artist name and full name <br />- Name of contributors (if
        applicable) <br />- Marketing and advertising <br />
        We may share your information with advertising partners in order to send
        you promotional communications about Singnify.
      </p>

      <p>Service providers and others</p>
      <p>
        We may from time to time share your information with service providers
        to perform functions and process user data and help provide our Service,
        consistent with this Privacy Policy. Where a third-party processes user
        data on our behalf (e.g., a hosting service provider), it is subject to
        security and confidentiality obligations consistent with this Privacy
        Policy and applicable law. Where a third-party processes user data on
        its own behalf, its processing is subject to its own Privacy Policy and
        applicable law. <br />
        In addition to the above, we may also share your information with third
        parties for these limited purposes: <br />- to allow a merger,
        acquisition, or sale of all or a portion of our assets; <br />- to
        respond to legal process (e.g., a court order or subpoena), if we
        believe in good faith that it is necessary to do so; <br />- to comply
        with requirements of mandatory applicable law; to protect the safety of
        any person;
        <br />- to protect the rights and property of Amuse, including to
        enforce the Agreements and any other terms that you have agreed to;
        <br />- to address fraud, security, or technical issues; <br />- to
        publish anonymized or pseudonymized data about the use of the Service;
        and to allow other companies in the Singnify group to use your
        information as specified in this Privacy Policy
      </p>

      <p>5. Transfer to Other Countries</p>
      <p>
        If you’re a residence of Switzerland or the EEA, you understand that
        your information may be transferred to and stored outside of that area.
        The country it is transferred to might not have the same protection laws
        as your country. However, if we do transfer your information, we will
        make sure that we protect your personal data in accordance with the GDPR
        requirements and set up contracts with those parties to ensure this..
      </p>

      <p>6. Children</p>
      <p>
        We do not let children under the age of 16 to register with our Services
        and therefore, we do not knowingly collect personal information from
        children. If you are a guardian of a child under the age of 16 and
        become aware that your child has provided personal information to us,
        please contact Customer Support and you may request to access and/or
        cancel the Service. If you are a California resident under the age of 16
        and you wish to remove publicly available content, also please contact
        Customer Support.
      </p>

      <p>7. How We Protect Your information</p>
      <p>
        Your security is important to us. We always do our best to maintain
        administrative, technical and physical safeguards to help protect your
        personal information from loss, misuse, unauthorized access, disclosure,
        alteration or disclosure. Since the Internet can’t be 100% secure, make
        sure you protect your password and username to prevent anyone from
        accessing your information.
      </p>

      <p>8. Your Rights, How to Contact Us and Complaints</p>
      <p>
        You are always entitled to receive information on data we have on you,
        free of charge. You also have the right to request to be erased and to
        get any inaccurate personal data blocked or corrected. Where we rely on
        consent to process your data, you can withdraw this consent at any time.
        Contact us! To send a request, please contact us at Customer Support
        with your name, address, username and the email address you used when
        you registered with us. If you’re not happy with how we handle your
        information, please contact us privacy@singnify.com
      </p>

      <p>9. Changes to the Privacy Policy</p>
      <p>
        We may make changes to this Privacy Policy. If we change, we’ll notify
        you by either displaying a notice within the Service or by sending you
        an email. If the change is minor, we’ll just make the changes here.
        Please make sure you read the notices carefully. If you do not want to
        continue using our Service under the new version of the Privacy Policy,
        please terminate your account.
      </p>

      <p>10. Cookies</p>
      <p>
        We and others working on our behalf employ cookies and related
        technologies to store information on or read information from your
        browser or device. They help us improve your experience, our Service and
        our marketing activities. Your web browser is probably set to accept
        cookies by default. You can choose to change this to remove and reject
        cookies. If you do, this might affect certain features on our Service
        and some things might not work. If you use our Service on a mobile
        device, you can limit tracking and targeting in relation to ads. We
        cannot, however, control these opt out processes. You can also check
        www.aboutcookies.org to find out more on how you change your browser
        settings. Sometimes we use pixel tags. The pixel tags are placed on
        certain web pages and when you access those web pages, the pixel tag
        generates a generic notice of the visit and permits us to see or read
        our cookies. They are used together with cookies to track activity on a
        site by a particular device. If you turn off cookies, we can only see
        anonymous website visits. We may use the following types of cookies:
        Strictly necessary cookies. These cookies are required for the operation
        of our site. Analytical/performance cookies. They allow us to recognize
        and count the number of visitors and see how visitors move around our
        Services. This helps us improve our Service. Mobile Device Identifiers
        and SDKs. Sometimes we use or partner with app developer platforms that
        use mobile SDKs to collect information, such as mobile identifiers
        (e.g., IDFAs and Android Advertising IDs) and information connected to
        how mobile devices interact with our Service and those using our
        Service.
      </p>
    </Container>
  );
}

export default PrivacyPolicy;

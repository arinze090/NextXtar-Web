import React from "react";
import styled from "styled-components";

import HeaderTitle from "../../components/common/HeaderTitle";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

const Title = styled.p`
  color: #003018;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 3px;
`;

function TermsAndCondition() {
  return (
    <Container>
      <HeaderTitle
        title={"Terms Of Service"}
        imgSrc={require("../../assets/singnifySplashLogo.png")}
        imgAlt={"T&C Image"}
      />
      <Title>1. Introduction:</Title>
      <Description>
        Thank you for choosing Singnify (“Singnify”, “we”, “us”, “our”). By
        signing up to or otherwise using the Singnify platform, app, service,
        websites, and software applications (together, the “Singnify Service” or
        “Service”), you are entering into a binding contract with Singnify.{" "}
        <br /> <br /> Your agreement with us includes these Terms of Use (“Terms
        of Use”), our Privacy Policy, and relevant supplemental terms
        (“Supplemental Terms”) that apply to your interaction with each specific
        Service (collectively the “Agreements”). Please read these documents
        carefully. You acknowledge that you have read, understood, and accepted
        these Agreements and agree to be bound by them. If you don’t agree with
        (or cannot comply with) the Agreements that apply to the services with
        which you interact, then don’t access or use the Singnify Service.{" "}
        <br /> <br /> In order to access and use the Singnify Service, you need
        to be at least 16 years old and have the power to enter a binding
        contract with us and not be prevented from doing so under any law. If
        you are under 16, you must be able to provide proof of your guardian’s
        consent. You also promise that the information you submit to us is true,
        accurate and complete, and you agree to keep it that way at all times.{" "}
        <br /> <br /> If you open an account on behalf of a company,
        organization, or other entity, then (a) “you” includes you and that
        entity, and (b) you represent and warrant that you are authorized to
        grant all permissions and licenses provided in the Agreements and bind
        the entity to the Agreements, and that you agree to the Agreements on
        the entity’s behalf.
      </Description>

      <Title>2. Definitions: </Title>
      <Description>
        “Recordings” shall mean any and all audio/Video recordings that you
        submit to Singnify by uploading through the Services. <br /> <br />{" "}
        “Stores” shall mean any and all, now known or future, digital Internet
        consumer stores (such as Spotify, Deezer, iTunes, and Amazon, etc.),
        and/or any other digital retailers of music which Singnify has, from
        time to time, entered into an agreement with. <br /> <br /> “Metadata”
        shall mean the music metadata, the information embedded in an audio file
        that is used to identify the content. This includes, but is not limited
        to, track title, band or artist name, type of music, label, and the year
        the track was released. <br /> <br /> “Territory” shall mean the world
        or specified applicable territory.
      </Description>

      <Title>3. Grant of rights:</Title>
      <Title>3a. Distribution:</Title>
      <Description>
        You grant us the right to sell and make use of your recordings for
        digital downloads, interactive and non-interactive streaming, cloud
        services, and streaming-on-demand services. This grant of rights does
        not, however, constitute a transfer of ownership. <br /> <br /> By using
        our Services, you grant us, during the Term and throughout the
        Territory, and by downloading and using our website/apps, you gave us
        exclusively as follows: <br /> <br /> The exclusive right to make your
        Recordings available on the Internet and without limitation, on all
        Stores and any other similar digital media for sale by downloading,
        interactive and non-interactive streaming, cloud services and
        streaming-on-demand or now known or herein after devised, similar means
        of making use of the Recordings. <br /> <br /> The right to sell, make
        sales promotion clips of, copy and otherwise, to the extent necessary
        under this Agreement, make use of and alter the Recordings and Metadata,
        by all means, and media, of which you submit to Singnify, through any
        and all Stores now available and operational and also the right to
        sublicense or otherwise transfer such rights to the Stores. <br />{" "}
        <br /> The non-exclusive right to use your name(s), photographs,
        likenesses, cover artwork, biographical and other information
        attributable to you, which you have submitted to Singnify. The right for
        Singnify to sublicense or otherwise transfers the above rights to any
        and all Stores. The above does not constitute a transfer of ownership to
        any of the material you have uploaded or submitted to Singnify. Any and
        all rights granted to us above are granted on a royalty license basis.
        This includes the use of any lyrics of the Recordings if you have
        submitted any.
      </Description>

      <Title>3b. PUBLISHING:</Title>
      <Title>THE BASIS ON WHICH YOU ARE SIGNED</Title>
      <Description>
        This Agreement is an exclusive Licensing and Publishing administration
        agreement by which you exclusively grant to us the copyright in all
        songs (including music, lyrics, arrangements, and titles) written by you
        and whose titles are specified in the schedule annexed. These are called
        the Songs.
      </Description>

      <Title>HOW LONG YOU ARE SIGNED FOR</Title>
      <Description>
        This Agreement shall run for a period of 60 months from the date of
        signature hereof and shall continue thereafter unless terminated by
        either party on 6 months written notice. This is called the Term of the
        Agreement.
      </Description>

      <Title>HOW LONG WE CONTROL THE SONGS FOR</Title>
      <Description>
        We shall exclusively own and administer the worldwide copyright of your
        Songs for the duration of the Term but if we procure a cover or a
        synchronization license of your Songs or any of them then the Term shall
        be extended in respect of those Songs only for a further period of 3
        years. The Term and this period of extension is called the Rights
        Period.So you assign to us for the Rights Period all of your copyright
        and or similar rights, title, and interest in the Songs.
      </Description>

      <Title>WHAT YOU WILL DO FOR US</Title>
      <Description>
        If during the Term you would like us to administer additional songs
        which are not specified in the schedule then we will do so on the same
        terms and conditions as contained herein provided that you comply with
        clause 4.2 below. <br />
        <br />
        You shall give us full copyright information relating to each Song. You
        shall give us full contact details for each writer that you collaborate
        with (if he/she is not already signed to us). You will within 48 hours
        of writing each Song provide us with a copy in a demo form (MP3 or CD
        format or otherwise as we may agree) with (if requested) legible lyric
        sheets, together with an instrumental version. <br /> <br />
        Should any further documentation be required to confirm the assignment
        and grant of rights in this Agreement (for example signature of
        registrations), you will sign any such documentation.
      </Description>

      <Title>WHAT WE PAY YOU</Title>
      <Description>
        We shall pay a royalty as follows: An amount equal to Seventy percent
        (70%) of our Net Receipts as that expression is defined below. But in
        the case of any Cover of a Song, this shall be sixty percent (60%) of
        Net Receipts and in the case of PRS income (where the so-called Writer’s
        Share is paid directly to you), we shall pay you Seventy percent (70%)
        of the so-called “Publisher’s Share” received by us (or twenty (20%)
        percent in the case of a Cover). <br /> <br /> For these purposes: -
        “Cover” shall mean: Any song recorded by an artist other than yourself
        which recording has been procured by us and/or our licensees and/or
        sub-publishers. Any Song licensed for use in a film, TV program or
        commercial which has resulted from our efforts and/or those of our
        licensees and/or sub-publishers. "Net Receipts” shall mean all sums
        received by us in the UK resulting from the exploitation of the Songs
        that is to say after: Standard commissions actually retained by
        performing rights societies and/or mechanical rights collection agencies
        or other collection agencies; VAT or any other taxes required to be
        deducted in any part of the World, “the Territory”; Any amounts paid by
        way of remuneration to arrangers’ adaptors and translators; Any amounts
        retained by our sub-publishers sub-licensees and/or administrators
        (which shall not exceed twenty-five (25%) percent of the monies arising
        “at source” in the relevant territory).
      </Description>

      <Title>WHEN WE WILL PAY YOU AND YOUR RIGHTS TO INSPECT OUR BOOKS</Title>
      <Description>
        We shall send you royalty statements no less frequently than on a
        quarterly basis within ninety (90) days after each such quarterly
        accounting period. If any royalties are shown to be due. <br /> <br />{" "}
        Once every five (5) calendar years, and subject to the prior appointment
        on reasonable notice, your representative (an independent qualified
        accountant) may audit (at your expense) our books and records to verify
        the accuracy of the statements submitted to you. Such representatives
        shall not conduct such audits on a contingency basis. Each statement
        shall be deemed agreed and binding if you have not challenged it within
        one (1) year from when it was rendered. <br /> <br /> The documents made
        available for audit contain confidential commercial information and
        neither you nor your representatives will disclose or use on behalf of
        any third party any facts or information obtained as a result of any
        such inspection. You shall provide us with a full copy of any draft
        and/or final report and you and your representatives shall discuss such
        report with us with a view to correcting any errors or questions arising
        therefrom.
      </Description>

      <Title>WHAT WE SHALL DO FOR YOU </Title>
      <Description>
        We shall do our best to exploit your songs. We shall exploit each Song
        by either granting licenses for commercial recordings of the Song or by
        granting a license for the use of the Song in a commercial or for a
        cinema or television film or by bona fide broadcasting transmitting or
        otherwise communicating the Songs to members of the public (including
        via terrestrial/satellite/internet radio). <br /> <br /> If we have not
        in relation to any Song done any of these things within two (2) years
        after the end of the Term of this Agreement then our rights in respect
        of such Song shall revert to you (subject only to any rights vested in
        third parties) upon receipt of a written request for reversion.
        Notwithstanding the foregoing, if we have made any recoupable payments
        to you and your account shall remain unrecouped at the end of the above
        mentioned two (2) year period, then we shall have a further period of an
        additional three (3) years within which to achieve some form of
        commercial exploitation before any such unexploited Songs shall revert
        to you.
      </Description>

      <Title>YOUR PROMISES TO US:</Title>
      <Description>
        You promise: You are free to enter into this Agreement and own all the
        rights in and to the Songs. The Songs are original and do not infringe
        the rights of any third party. <br /> <br />
        To indemnify us against all loss and damage (including legal fees and
        costs) arising out of any claim by a third party which is inconsistent
        with any promise made by your Agreement and you shall agree to reimburse
        us on demand for any payment made by us with respect to any liability or
        claim to which the foregoing indemnity applies. <br /> <br /> You shall
        waive all moral rights and shall not enforce or exercise your moral
        rights in the Songs so as to restrict or restrain us or any person
        claiming through us from exploiting the Songs PROVIDED THAT your right
        to be properly credited as the author of the Songs shall be respected
        and we shall not authorize knowingly any derogatory adaption of a Song.{" "}
        <br /> <br />
        If a claim is presented against us which is inconsistent with the
        warranties you have given us and if we in our sole discretion consider
        ourselves to be placed in jeopardy then we shall notify you of such
        claim. Until such claim has been finally adjudicated or settled, we
        shall have the right to withhold any and all monies becoming due and
        payable to you hereunder. <br /> <br /> Royalties that would otherwise
        be due to be paid to you shall be deposited in an interest-bearing bank
        account. Upon the final adjudication or settlement of such claim, we
        shall disburse all funds (fewer costs and damages) in accordance with
        the terms of any settlement, judgment, or other disposition thereof.{" "}
        <br /> <br /> Your song writing services are unique and of a personal
        nature. The loss of your services may not be adequately compensated by
        damages and so, we will be entitled to injunctive relief against you for
        failure to provide such services exclusively to us or for other breaches
        by you. <br /> <br /> We shall be entitled to take legal proceedings in
        your name to protect our rights under this Agreement.
      </Description>

      <Title>CREATIVE ISSUES: </Title>
      <Description>
        We shall use reasonable commercial endeavors to consult with you on all
        creative issues to do with the Songs. You shall have a right of
        consultation over the use of your Songs in commercials and
        advertisements (but excluding commercials or advertisements for records
        featuring or promoting your Songs), and over the making of any material
        changes to the original language lyric or musical content of your Songs.
      </Description>

      <Title>PRS OR EQUIVALENT </Title>
      <Description>
        If you are a member of the PRS, then this Agreement shall constitute
        your certificate for the purpose of rule 1(o) of the PRS, entitling PRS
        to treat us as “Publishers exploiting the Songs for the benefit of the
        Writer”. The so-called “Writer’s Share” of all performing right fees
        shall be six twelfths (6/12) of all such monies collected by the PRS
        following the deduction of the latter’s collection fees. Such a share
        shall be paid to you directly by the PRS. <br /> <br /> The Publishers
        shall not be under any obligation to collect payor account to you for
        such “Writer’s Share” of performing right fees. “Publisher’s Share”
        shall mean the original combined publisher’s share and sub-publishers
        share of performing fees customarily paid by performing right societies
        to publishers but not less than six-twelfths (6/12) of gross performing
        fees.You shall notify us immediately if you are a member of any
        performing or copyright collection society that is not based in the UK.
      </Description>

      <Title>EFFECT OF BREACH</Title>
      <Description>
        If we shall materially fail to perform any material obligation and such
        failure continues for a period of forty-five (45) days after receipt by
        us of notice in writing from you specifying such default you can
        terminate the Term of this Agreement by written notice. <br /> <br />
        If you shall materially default in the performance of any of the
        material obligation and such default shall continue for a period of
        forty-five (45) days after receipt by you of notice in writing from us
        alleging such default we shall be entitled to forthwith terminate the
        Term of this <br /> <br />
        Any termination of the Term shall be without prejudice to our already
        acquired rights hereunder. In the event of any termination under
        subclause then any and all recoupable payments made to you hereunder
        shall to the extent not recouped by us as at the date of such
        termination be forthwith repayable by you to us. Notwithstanding the
        foregoing if you fail or refuse to fulfill material obligations
        hereunder or commit a breach of any of the material terms and/or
        conditions hereof we may without prejudice to our other rights suspend
        our obligations to you for the duration of such failure or refusal and
        the Term of this Agreement shall thereafter be deemed automatically
        extended for a period equal to all or any part of the period of such
        default or breach PROVIDED THAT no such suspension or extension for any
        one default shall exceed two (2) years.
      </Description>

      <Title>4. Your Singnify Account:</Title>
      <Description>
        In order to access certain features of the Service, you must create
        and/or sign in to a user account (“Singnify Account”) of your own.
        Creating an account is completely free. Use of another’s account is not
        permitted. When creating your account, you must provide accurate and
        complete information. <br /> <br /> You are solely responsible for the
        activity that occurs in your Singnify Account. You are also responsible
        for maintaining the security of your account password, as well as the
        passwords of any third-party services that you may have elected to link
        to your account. <br /> <br /> Please review our fully transparent
        Privacy Policy for information regarding security, confidentiality, and
        what we do with the data you provide us.
      </Description>

      <Title>5. Your Music, Materials, and Information: </Title>
      <Description>
        When you upload your Recordings through our Services, you are asked to
        submit cover artwork for use in the Stores. You submit the Recordings,
        cover artwork, and any other information and material at your own
        expense and in formats required for use in the Stores. <br /> <br /> You
        are fully responsible for everything you submit to us. If we find it
        unsuitable, we reserve the right to, in our sole discretion, remove the
        information and/or prevent you from using our Services and/or any or all
        Stores.
      </Description>

      <Title> 6. Terms of Upload: </Title>
      <Description>
        When uploading your song/s or videos make sure they met our
        specifications, Audio files must be 16-bit, 44.1 kHz MP3 files of good
        quality. The artwork/Cover/jacket must have these specifications, <br />{" "}
        <br />- TIF or JPG format <br /> <br />- Square (width and height must
        be the same)
        <br /> <br />- Minimum Size: 3000 by 3000 pixels
        <br /> <br />- Maximum Size: 5000 by 5000 pixels
        <br /> <br />- 300 DPI in RGB format
        <br /> <br />- Any song uploaded without design artwork, (song titles
        and artiste name) will not be approved
        <br /> <br />- No Social media logos or handles No Brand logos
        <br /> <br />- Any text except for artist names and/or the name of the
        release will be rejected.
        <br /> <br />- Any song uploaded on Singnify and was approved cannot be
        taken down within six months of upload. We urge you to read our terms of
        use before uploading songs and videos on Singnify. If the artist chooses
        to take his or her songs/Videos down immediately, a fee of $100 is
        charged in order for a takedown to proceed.
      </Description>

      <Title>7. Payment and Fees: </Title>
      <Description>
        Singnify shall pay to you or Company: a) Distribution. Sixty percent
        (60%) of all gross receipts actually received by Singnify from its
        Licensees deriving from sales of the Recordings to end consumers, and
        from any monies recovered, <br /> <br /> (b) Collections. Seventy
        percent (70%) of Singnify’s receipts solely with respect to collections
        described in paragraph 1(b) above. <br /> (c) Synchronization Licenses.
        Fifty percent (50%) with respect to synchronization licenses pursuant to
        paragraph 1(c) above. <br />
        (d) Special Products and Other Promotional Uses. Forty percent (40%) of
        gross receipts received by Singnify from Licensees in the form of
        end-consumer redemptions of the Recordings under programs conducted by
        other companies to whom Singnify licenses the Recordings to both promote
        the Recordings and help sell and/or promote such companies’ products or
        brands, including, for instance, customer acquisition and retention
        programs, gift-with-purchase and purchase-with-purchase programs, etc.{" "}
        <br /> (e) Compilation Albums. Thirty percent (30%) with respect to
        compilation album licenses pursuant. <br /> <br />
        Singnify updates the account quarterly, four times a year, 24th of
        February, 24th of May, 24th of August, and 24th of November. Accounts
        are automatically updated, according to the details of sales directly
        from digital stores. You can withdraw your fund anytime, as long as you
        have at less $100 in your account. Withdraw can only be approved if an
        account is verified.
      </Description>

      <Title>8. Singnify Copyright. </Title>
      <Description>
        When you upload your songs/videos on Singnify, Singnify will place
        copyright ownership on your songs/Videos, on your behalf this does not
        mean you transferred ownership of your songs/Video to Singnify, it
        simply means Singnify put a protective claim over it on your behalf, you
        own your songs/Videos and materials 100%
      </Description>

      <Title>9. Stores: </Title>
      <Description>
        We have entered into agreements with different Stores for the purpose of
        Distributing, Licensing, and Publishing. The agreements that Singnify
        enter with the Stores shall determine the terms on which you’re
        Recordings are promoted or made available. Singnify assumes no liability
        for any interruptions, delays, errors, or any suspensions of access,
        neither in whole nor in part. When you upload your Recordings through
        Our Service, we will send your Recording to all territories worldwide.
      </Description>

      <Title>
        10. Prohibited Use and Infringement and Reporting of Content:{" "}
      </Title>
      <Description>
        You may not in any way use our Services for any unlawful purpose or for
        the following reasons. In any way that is or has the purpose of being
        unlawful or fraudulent. For the purpose to harm or attempt to harm any
        other person in any way You may not upload any Recordings or Materials
        which may. Contain hateful, racist, or inflammatory material. Promote
        sexually explicit or violent material. Promote discrimination based on
        race, religion, nationality, disability, or sexual orientation. Promote,
        advocate or assist in any illegal activity. Threaten, harass, upset, or
        alarm any other person or invade their privacy. Impersonate any person.{" "}
        <br /> <br />
        Singnify reserves the right to, in its sole discretion, determine if a
        Recording or if you have breached the above or any other section of the
        Agreements. If we find that a breach has been made, we take such and any
        action we deem appropriate. We might, but are not limited to,
        temporarily or permanently remove your account and any Recordings or
        material uploaded through our Services, without notifying you.
      </Description>
      <Title>11. Third Party Applications. </Title>
      <Description>
        The Singnify Service may be integrated with third-party applications,
        websites, and services (“Third Party Applications”) to make the Services
        available to you. These Third-Party Applications may have their own
        terms and conditions and privacy policies and your use of these
        Third-Party Applications will be governed by and subject to such terms
        and conditions and privacy policies. You understand and agree that
        Singnify does not endorse and is not responsible or liable for the
        behavior, features, or content of any Third-Party Application or for any
        transaction you may enter into with the provider of any such Third-Party
        Applications.
      </Description>
      <Title>12. Your Use of the Singnify Service: </Title>
      <Description>
        The Singnify Service may be used and accessed solely for lawful
        purposes. You agree to abide by all applicable laws and regulations in
        connection with your use of the Service. You agree and warrant that you
        will not use the Singnify Service to transmit, distribute, route,
        provide connections to or store any material that infringes copyrighted
        works or otherwise violates or promotes the violation of the
        intellectual property rights of any third party <br /> <br /> Your
        Singnify Account shall be used solely by you and may not be transferred
        or shared with any third party. You acknowledge that you are exclusively
        responsible for all usage or activity on your Singnify Account. You
        shall immediately notify Singnify of any breach of security or
        unauthorized use of your Singnify account. Any fraudulent, abusive, or
        otherwise illegal account activity shall constitute a basis to terminate
        your account. You agree to indemnify Singnify against any liability and
        costs arising from such improper use of your Singnify Account.
      </Description>
      <Title>13. Your Liability and Warranties: </Title>
      <Description>
        You agree and warrant that you will not distribute, transmit or store
        any files or material that might infringe copyrighted works. You also
        agree that you will not promote violation of a third party’s
        intellectual property rights. If you do, you acknowledge that Singnify
        may at any time, and in its sole discretion, remove your Recordings,
        disable access to the Services without notifying you, <br /> <br /> You
        also agree that: You are not under any disability, restriction or
        prohibition to enter into the Agreements and grant the rights under the
        Agreements. <br /> You are responsible for all the Recordings and other
        materials and information uploaded through the Services. You are the
        owner or legally represent the owner of the Recordings and the materials
        and that you possess full power and authority to enter into and perform
        under the Agreements. <br /> You have not entered into any agreement
        which may conflict with the Agreements. You have obtained all applicable
        and relevant consents and rights from, but not limited to, any owners,
        artists, musicians, producers, other persons, and companies involved in
        the production of the Recordings. <br /> You have, in the case of a
        cover version (a recording of a song/lyric for which you are not the
        author or owner) obtained all relevant consents for such use, and be
        able to present this consent to us. The Recordings are original and do
        not contain any samples which have not been cleared or else infringe
        upon the right of any person or third party. <br /> You shall not commit
        any act which might damage the reputation of Singnify or might inhibit,
        restrict or interfere with the exploitations of the Recordings. If
        you’re not the artist/owner of the Recordings, you have a valid and
        presentable agreement with the Artist that grants you all the rights to
        ent <br /> Moreover, you agree not to: Distribute, alter or modify any
        part of or parts of the Service; Circumvent any technology used by
        Singnify, its licensors, or any third party to protect the Service or
        any content on the Service; Sell, rent, sublicense or lease any part of
        the Service; Provide your password to any other person or using any
        other person’s username and password;
      </Description>
      <Title>14. Infringement and Reporting of Content: </Title>
      <Description>
        Singnify respects the rights of intellectual property owners. If you
        believe that any content on the Service infringes your intellectual
        property rights or other rights, please contact customer support. If
        Singnify is notified by a copyright holder that any Content infringes a
        copyright, Singnify may in its sole discretion take actions without
        prior notification to the provider of that content. If the provider
        believes that the content is not infringing, the provider may submit a
        counter-notification to Singnify with a request to restore the removed
        content. If you believe that any content infringes any other
        intellectual property rights or does not comply with these Terms of Use,
        please contact Customer Support.
      </Description>
      <Title>15. Our Rights: </Title>
      <Description>
        We reserve the right to amend, discontinue or terminate our Services
        under this Agreement, at any time. We reserve the right to reject or
        remove any Recordings or Materials from the Stores and our Services that
        you have uploaded through the Services. We also reserve the right to
        terminate your access to the Stores or Services without notice
      </Description>
      <Title>16. Our Intellectual Property: </Title>
      <Description>
        The Singnify Service, including but not limited to, all related
        technology, data, tools, and design is the property of Singnify and its
        subsidiaries or its licensors. We grant you a limited, non-exclusive,
        revocable license to make use of the Singnify Service. <br /> <br /> The
        Singnify trademarks, service marks, trade names, logos, domain names,
        and any other features of the Singnify brand are the sole property of
        Singnify and its subsidiaries. The Agreements do not grant you any
        rights to use any Brand Features whether for commercial or
        non-commercial use. <br /> <br /> We value hearing from our users and
        are always interested in learning about ways we can improve the Service.
        If you choose to submit comments, ideas, or feedback (“Feedback”), you
        agree that we are free to use them without any restriction or
        compensation to you.
      </Description>
      <Title>17. Service Limitations and Modifications: </Title>
      <Description>
        Singnify will make reasonable efforts to keep the Singnify Service
        operational. However, certain technical difficulties or maintenance may,
        from time to time, result in temporary interruptions. Singnify reserves
        the right, periodically and at any time, to modify or discontinue,
        temporarily or permanently, functions and features of the Singnify
        Service, with or without notice, all without liability to you, except
        where prohibited by law, for any interruption, modification, or
        discontinuation of the Singnify Service or any function or feature
        thereof.
      </Description>
      <Title>18. Term and Termination: </Title>
      <Description>
        The terms of this Agreement shall commence and continue (the “Term”)
        unless terminated by either Party under the Agreements. You may at any
        time terminate and cancel the Singnify Services by contacting Customer
        Support <br /> <br />
        Singnify may terminate the Agreements or suspend your access to the
        Singnify Service at any time for any and no reason, including in the
        event of your actual or suspected unauthorized use of the Singnify
        Service and/or any content, or non-compliance with the Agreements. You
        may terminate your Singnify Account at any time by submitting a
        termination request to Customer Support. Bear in mind, when you submit a
        request for termination, from the date you submit this request, it will
        take us one year (365 days), to completely remove all your materials we
        have submitted to the online stores, or the artist will pay the sum of
        $100 dollars in order to have his songs remove within seven days (7
        Days) Any sections of the Agreements that, either explicitly or by their
        nature, must remain in effect even after termination of the Agreements,
        shall survive termination.
      </Description>

      <Title>19. Warranty and Disclaimer: </Title>
      <Description>
        WE ENDEAVOUR TO PROVIDE THE BEST SERVICE WE CAN, BUT YOU UNDERSTAND AND
        AGREE THAT THE Singnify SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE”,
        WITHOUT EXPRESS OR IMPLIED WARRANTY OR CONDITION OF ANY KIND. YOU USE
        THE Singnify SERVICE AT YOUR OWN RISK. TO THE FULLEST EXTENT PERMITTED
        BY APPLICABLE LAW, Singnify MAKES NO REPRESENTATIONS AND DISCLAIMS ANY
        WARRANTIES OR CONDITIONS OF SATISFACTORY QUALITY, MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
      </Description>
      <Title>20. Limitation of Liability: </Title>
      <Description>
        YOU AGREE THAT, TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOU’RE SOLE
        AND EXCLUSIVE REMEDY FOR ANY PROBLEMS OR DISSATISFACTION WITH THE
        Singnify SERVICE IS TO UNINSTALL ANY Singnify SOFTWARE AND TO STOP USING
        THE Singnify SERVICE.
        <br /> <br />
        TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL Singnify, ITS
        OFFICERS, SHAREHOLDERS, EMPLOYEES, AGENTS, DIRECTORS, SUBSIDIARIES,
        AFFILIATES, SUCCESSORS, ASSIGNS, SUPPLIERS, OR LICENSORS BE LIABLE FOR
        (1) ANY INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, EXEMPLARY, OR
        CONSEQUENTIAL DAMAGES; (2) ANY LOSS OF USE, DATA, BUSINESS, OR PROFITS
        (WHETHER DIRECT OR INDIRECT), IN ALL CASES, ARISING OUT OF THE USE OR
        INABILITY TO USE THE Singnify SERVICE, REGARDLESS OF LEGAL THEORY,
        WITHOUT REGARD TO WHETHER Singnify HAS BEEN WARNED OF THE POSSIBILITY OF
        THOSE DAMAGES, AND EVEN IF A REMEDY FAILS OF ITS ESSENTIAL PURPOSE; OR
        (3) AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE Singnify SERVICE,
        THIRD PARTY APPLICATIONS, OR THIRD PARTY APPLICATION CONTENT MORE THAN
        $1,000 (one-thousand USD), TO THE EXTENT PERMISSIBLE BY APPLICABLE LAW.
        <br /> <br /> YOU SHALL INDEMNIFY AND HOLD HARMLESS Singnify, ITS
        SUBSIDIARIES AND AFFILIATES (INCLUDING ANY DIRECTORS, MEMBERS,
        EMPLOYEES, MEMBERS, AND OTHER REPRESENTATIVES) AND THE STORES FROM AND
        AGAINST ANY AND ALL CLAIMS, LOSSES, DAMAGES, LIABILITIES, COSTS AND
        EXPENSES INCLUDING, WITHOUT LIMITATION, LEGAL EXPENSES AND COUNSEL FEES,
        ARISING OUT OF ANY BREACH OR ALLEGED BREACH BY YOU OF THE ABOVE
        WARRANTIES AND REPRESENTATIONS AND/OR USE OF THE RECORDINGS OR MATERIALS
        AS PERMITTED HEREUNDER.
      </Description>
      <Title>21. Entire Agreement: </Title>
      <Description>
        Other than as stated in this section or as explicitly agreed upon in
        writing between you and Singnify, the Agreements constitute all the
        terms and conditions agreed upon between you and Singnify and supersede
        any prior agreements in relation to the subject matter of these
        Agreements, whether written or oral.
      </Description>
      <Title>22. Severability and Waiver: </Title>
      <Description>
        Unless as otherwise stated in the Agreements, should any provision of
        the Agreements be held invalid or unenforceable for any reason or to any
        extent, such invalidity or unenforceability shall not in any manner
        affect or render invalid or unenforceable the remaining provisions of
        the Agreements, and the application of that provision shall be enforced
        to the extent permitted by law. Any failure by Singnify to enforce the
        Agreements or any provision thereof shall not waive Singnify’s or the
        applicable third-party beneficiary’s right to do so.
      </Description>
      <Title>23. Assignment: </Title>
      <Description>
        Singnify may assign the Agreements or any part of them, and Singnify may
        delegate any of its obligations under the Agreements. You may not assign
        the Agreements or any part of them, nor transfer or sub-license your
        rights under the Agreements, to any third party.
      </Description>
      <Title>24. Indemnification: </Title>
      <Description>
        To the fullest extent permitted by applicable law, you agree to
        indemnify and hold Singnify harmless from and against all damages,
        losses, and expenses of any kind (including reasonable attorney fees and
        costs) arising out of: (1) your breach of this Agreement; (2) any
        content submitted by you to the Service; (3) any activity in which you
        engage on or through the Singnify Service; and (4) your violation of any
        law or the rights of a third party.
      </Description>
      <Title>25. Force Majeure: </Title>
      <Description>
        Singnify takes no liability or responsibility for failures in providing
        any of our Services if they are caused by an event outside Singnify’s
        control. Force Majeure means an event beyond our control that prevents
        us from complying with any obligations under this Agreement. These
        events include, but are not limited to, fires, earthquakes, tidal waves,
        floods, war, hostilities, invasion, embargo, revolution, civil war,
        riot, strikes, lockouts, acts or threats of terrorism, commotion, and
        failures of public or private telecommunication networks, third party
        force majeure and an epidemic. Should an event of Force Majeure occur,
        Singnify will notify you as soon as reasonable and give an estimate when
        due fulfillment can be expected. You may cancel your Services with us if
        your Service is affected by Force Majeure and if it has continued for
        more than 90 days.
      </Description>
      <Title>26. Jurisdiction and Dispute Venue:</Title>
      <Description>
        The Agreements and our Services shall be governed by the laws of Ukraine
        and any dispute regarding this Agreement shall be submitted to the
        exclusive jurisdiction of the district court of Warsaw, Poland.
      </Description>
      <Title>27. Changes to the Agreement: </Title>
      <Description>
        Occasionally we may, in our discretion, make changes to the Agreements.
        When we make material changes to the Agreements, we’ll provide you with
        prominent notice as appropriate under the circumstances, e.g., by
        displaying a prominent notice within the Service or by sending you an
        email. In some cases, we will notify you in advance, and your continued
        use of the Service after the changes have been made will constitute your
        acceptance of the changes. Please, therefore, make sure you read any
        such notice carefully.
      </Description>
      <Title>28. Contact Us: </Title>
      <Description>
        If you have any questions concerning the Singnify Service or the
        Agreements, please contact our Customer Support. info@singnify.com,
        contact@singnify.com dispute@singnify.com Publishing and Licensing
        Agreement
      </Description>
      <Title>1. THE BASIS ON WHICH YOU ARE SIGNED </Title>
      <Description>
        This Agreement is an exclusive Licensing and Publishing administration
        agreement by which you exclusively grant to us the copyright in all
        songs (including music, lyrics, arrangements, and titles) written by you
        and whose titles are specified in the schedule annexed. These are called
        the Songs.
      </Description>
      <Title>2. HOW LONG YOU ARE SIGNED FOR </Title>
      <Description>
        This Agreement shall run for a period of 60 months from the date of
        signature hereof and shall continue thereafter unless terminated by
        either party on 6 months written notice. This is called the Term of the
        Agreement.
      </Description>
      <Title>3. HOW LONG WE CONTROL THE SONGS FOR </Title>
      <Description>
        3.1 We shall exclusively own and administer the worldwide copyright of
        your Songs for the duration of the Term but if we procure a cover or a
        synchronization license of your Songs or any of them then the Term shall
        be extended in respect of those Songs only for a further period of 3
        years. The Term and this period of extension is called the Rights
        Period. <br /> <br /> 3.2 So you assign to us for the Rights Period all
        of your copyright and or similar rights, title, and interest in the
        Songs.
      </Description>
      <Title>4. WHAT YOU WILL DO FOR US</Title>
      <Description>
        4.1 If during the Term you would like us to administer additional songs
        which are not specified in the schedule then we will do so on the same
        terms and conditions as contained herein provided that you comply with
        clause 4.2 below. <br /> <br />
        4.2 You shall give us full copyright information relating to each Song.
        You shall give us full contact details for each writer that you
        collaborate with (if he/she is not already signed to us). You will
        within 48 hours of writing each Song provide us with a copy in a demo
        form (MP3 or CD format or otherwise as we may agree) with (if requested)
        legible lyric sheets, together with an instrumental version. <br />{" "}
        <br /> 4.3 Should any further documentation be required to confirm the
        assignment and grant of rights in this Agreement (for example signature
        of registrations), you will sign any such documentation.
      </Description>
      <Title>5. WHAT WE PAY YOU </Title>
      <Description>
        We shall pay a royalty as follows: An amount equal to Sixty percent
        (60%) of our Net Receipts as that expression is defined below. But in
        the case of any Cover of a Song, this shall be sixty percent (60%) of
        Net Receipts and in the case of PRS income (where the so-called Writer’s
        Share is paid directly to you), we shall pay you forty percent (40%) of
        the so-called “Publisher’s Share” received by us (or twenty (20%)
        percent in the case of a Cover). <br /> <br /> For these purposes: -
        “Cover” shall mean: Any song recorded by an artist other than yourself
        which recording has been procured by us and/or our licensees and/or
        sub-publishers. Any Song licensed for use in a film, TV program or
        commercial which has resulted from our efforts and/or those of our
        licensees and/or sub-publishers. "Net Receipts” shall mean all sums
        received by us in the UK resulting from the exploitation of the Songs
        that is to say after: <br /> <br /> Standard commissions actually
        retained by performing rights societies and/or mechanical rights
        collection agencies or other collection agencies; VAT or any other taxes
        required to be deducted in any part of the World, “the Territory”; Any
        amounts paid by way of remuneration to arrangers’ adaptors and
        translators; Any amounts retained by our sub-publishers sub-licensees
        and/or administrators (which shall not exceed twenty-five (25%) percent
        of the monies arising “at source” in the relevant territory).
      </Description>
      <Title>
        6. WHEN WE WILL PAY YOU AND YOUR RIGHTS TO INSPECT OUR BOOKS{" "}
      </Title>
      <Description>
        6.1 We shall send you royalty statements no less frequently than on a
        semiannual basis within ninety (90) days after each such semi-annual
        accounting period. If any royalties are shown to be due. <br /> <br />{" "}
        6.2 Once in each calendar year, and subject to the prior appointment on
        reasonable notice, your representative (an independent qualified
        accountant) may audit (at your expense) our books and records to verify
        the accuracy of the statements submitted to you. Such representatives
        shall not conduct such audits on a contingency basis. Each statement
        shall be deemed agreed and binding if you have not challenged it within
        one (1) year from when it was rendered. <br /> <br /> 6.3 The documents
        made available for audit contain confidential commercial information and
        neither you nor your representatives will disclose or use on behalf of
        any third party any facts or information obtained as a result of any
        such inspection. You shall provide us with a full copy of any draft
        and/or final report and you and your representatives shall discuss such
        report with us with a view to correcting any errors or questions arising
        therefrom.
      </Description>
      <Title>7. WHAT WE SHALL DO FOR YOU</Title>
      <Description>
        7.1 We shall do our best to exploit your songs. <br /> <br /> 7.2 We
        shall exploit each Song by either granting licenses for commercial
        recordings of the Song or by granting a license for the use of the Song
        in a commercial or for a cinema or television film or by bona fide
        broadcasting transmitting or otherwise communicating the Songs to
        members of the public (including via terrestrial/satellite/internet
        radio). <br /> <br /> 7.3 If we have not in relation to any Song done
        any of these things within two (2) years after the end of the Term of
        this Agreement then our rights in respect of such Song shall revert to
        you (subject only to any rights vested in third parties) upon receipt of
        a written request for reversion. Notwithstanding the foregoing, if we
        have made any recoupable payments to you and your account shall remain
        unrecouped at the end of the above mentioned two (2) year period, then
        we shall have a further period of an additional three (3) years within
        which to achieve some form of commercial exploitation before any such
        unexploited Songs shall revert to you.
      </Description>
      <Title>8. YOUR PROMISES TO US:</Title>
      <Description>
        You promise: <br /> 8.1 You are free to enter into this Agreement and
        own all the rights in and to the Songs. <br /> 8.2 The Songs are
        original and do not infringe the rights of any third party. <br />
        8.3 To indemnify us against all loss and damage (including legal fees
        and costs) arising out of any claim by a third party which is
        inconsistent with any promise made by your Agreement and you shall agree
        to reimburse us on demand for any payment made by us with respect to any
        liability or claim to which the foregoing indemnity applies. <br /> 8.4
        You shall waive all moral rights and shall not enforce or exercise your
        moral rights in the Songs so as to restrict or restrain us or any person
        claiming through us from exploiting the Songs PROVIDED THAT your right
        to be properly credited as the author of the Songs shall be respected
        and we shall not authorize knowingly any derogatory adaption of a Song.{" "}
        <br /> 8.5 If a claim is presented against us which is inconsistent with
        the warranties you have given us and if we in our sole discretion
        consider ourselves to be placed in jeopardy then we shall notify you of
        such claim. Until such claim has been finally adjudicated or settled, we
        shall have the right to withhold any and all monies becoming due and
        payable to you hereunder. Royalties that would otherwise be due to be
        paid to you shall be deposited in an interest-bearing bank account. Upon
        the final adjudication or settlement of such claim, we shall disburse
        all funds (fewer costs and damages) in accordance with the terms of any
        settlement, judgment, or other disposition thereof <br /> 8.6 Your
        songwriting services are unique and of a personal nature. The loss of
        your services may not be adequately compensated by damages and so, we
        will be entitled to injunctive relief against you for failure to provide
        such services exclusively to us or for other breaches by you. <br /> 8.7
        We shall be entitled to take legal proceedings in your name to protect
        our rights under this Agreement.
      </Description>
      <Title>9. CREATIVE ISSUES</Title>
      <Description>
        We shall use reasonable commercial endeavors to consult with you on all
        creative issues to do with the Songs. You shall have a right of
        consultation over the use of your Songs in commercials and
        advertisements (but excluding commercials or advertisements for records
        featuring or promoting your Songs), and over the making of any material
        changes to the original language lyric or musical content of your Songs.
      </Description>
      <Title>10. PRS OR EQUIVALENT</Title>
      <Description>
        10.1 If you are a member of the PRS, then this Agreement shall
        constitute your certificate for the purpose of rule 1(o) of the PRS,
        entitling PRS to treat us as “Publishers exploiting the Songs for the
        benefit of the Writer”. The so-called “Writer’s Share” of all performing
        right fees shall be six twelfths (6/12) of all such monies collected by
        the PRS following the deduction of the latter’s collection fees. Such a
        share shall be paid to you directly by the PRS. The Publishers shall not
        be under any obligation to collect payor account to you for such
        “Writer’s Share” of performing right fees. “Publisher’s Share” shall
        mean the original combined publisher’s share and sub-publishers share of
        performing fees customarily paid by performing right societies to
        publishers but not less than six-twelfths (6/12) of gross performing
        fees. <br /> <br /> 10.2 You shall notify us immediately if you are a
        member of any performing or copyright collection society that is not
        based in the UK.
      </Description>
      <Title>11. EFFECT OF BREACH</Title>
      <Description>
        11.1 If we shall materially fail to perform any material obligation and
        such failure continues for a period of forty-five (45) days after
        receipt by us of notice in writing from you specifying such default you
        can terminate the Term of this Agreement by written notice. <br />{" "}
        <br /> 11.2 If you shall materially default in the performance of any of
        the material obligation and such default shall continue for a period of
        forty-five (45) days after receipt by you of notice in writing from us
        alleging such default we shall be entitled to forthwith terminate the
        Term of this <br /> <br /> Agreement by written notice. 11.3 Any
        termination of the Term shall be without prejudice to our already
        acquired rights hereunder. In the event of any termination under
        subclause 11.2 then any and all recoupable payments made to you
        hereunder shall to the extent not recouped by us as at the date of such
        termination be forthwith repayable by you to us. <br /> <br />
        11.4 Notwithstanding the foregoing if you fail or refuse to fulfill
        material obligations hereunder or commit a breach of any of the material
        terms and/or conditions hereof we may without prejudice to our other
        rights suspend our obligations to you for the duration of such failure
        or refusal and the Term of this Agreement shall thereafter be deemed
        automatically extended for a period equal to all or any part of the
        period of such default or breach PROVIDED THAT no such suspension or
        extension for any one default shall exceed two (2) years.
      </Description>
      <Title>12. JURISDICTION AND INTERPRETATION</Title>
      <Description>This Agreement shall be governed by Polish law.</Description>
    </Container>
  );
}

export default TermsAndCondition;

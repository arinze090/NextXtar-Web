import React from "react";
import styled from "styled-components";

import HeaderTitle from "../../components/common/HeaderTitle";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: black;
  padding-top: 80px;
`;

const Title = styled.p`
  color: #05a30b;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 3px;
  color: #ccc;
`;

function FAQs() {
  return (
    <Container>
      <HeaderTitle
        title={"FAQs"}
        imgSrc={require("../../assets/singnifySplashLogo.png")}
        imgAlt={"FAQs Image"}
      />
      <Title>Distribution Timeline</Title>
      <Description>
        Singnify gets your music on all the major digital platforms in a maximum
        of 7 days. If you're in a hurry, we offer express delivery, which takes
        just 48 hours.
      </Description>

      <Title>Platform Coverage</Title>
      <Description>
        2. Will my song be available on iTunes and Spotify? <br />
        Absolutely! Singnify puts your music on a bunch of platforms, including
        iTunes, Spotify, Amazon, Deezer, Tidal, Apple Music, Boomplay,
        Audiomack, TikTok, Facebook, Instagram, and more than 100 other global
        digital music stores.
      </Description>

      <Title>Royalty Payments</Title>
      <Description>
        3. Will Singnify pay royalties for songs streamed on digital stores?{" "}
        <br /> You bet! We pay out royalties every 90 days on February 24th, May
        24th, August 24th, and November 24th. Artists have full access to
        withdraw their earnings whenever they want, no strings attached.
      </Description>

      <Title>Artwork Modifications</Title>
      <Description>
        Why did Singnify change my artwork? <br />
        Sometimes, stores might not like the artwork you provided, and that
        could cause delays. In those cases, our graphic designers step in and
        create improved artwork. Don't worry, though; you can always update your
        artwork as you see fit. Our main goal is to get your music out there on
        time.
      </Description>

      <Title>Song Takedown</Title>
      <Description>
        Can I take down my song anytime? <br />
        While you have the freedom to remove your song at any point, certain
        digital stores may have their own rules and fees for takedowns. Also,
        remember that it might take a bit of time to remove your song from the
        100+ stores we distribute to..
      </Description>

      <Title>Takedown Timeline</Title>
      <Description>
        How long does it take for a song to be taken down? <br />
        The time it takes to take down a song varies because each of the 100+
        digital stores we work with has its own process. However, the minimum
        period is usually around 30 days. Promotion.
      </Description>

      <Title>Promotion</Title>
      <Description>
        Can Singnify promote my song? <br />
        Absolutely! Singnify has some great tools to help artists promote their
        music globally. We have a substantial following on our social media
        accounts, and you can use these platforms, along with other features in
        the Singnify App, to get your music out there.
      </Description>

      <Title>Artwork and Audio Requirements</Title>
      <Description>
        I am having trouble uploading my artwork and audio. <br />
        No worries! Singnify accepts artwork with dimensions ranging from 3000 x
        3000 pixels to 5000 x 5000 pixels, and we take audio in MP3 or WAV
        formats. Just make sure your files meet these specs before you upload
        them to Singnify.
      </Description>

      <Title>Release Processing</Title>
      <Description>
        What happens after I upload my release? <br />
        Once you've successfully uploaded your music, Singnify reviews the music
        itself, the metadata, and the artwork. If we have any questions, we'll
        get in touch with you. This whole process ensures that everything aligns
        with the guidelines set by the digital music stores and blogs.
      </Description>

      <Title>Changes to Upload</Title>
      <Description>
        Can I make changes to an upload? <br />
        Sure thing! You can make changes to your upload before it's approved on
        the Singnify App. Once it's been distributed to the digital music
        platforms, though, it takes about a month before any changes can be
        implemented.
      </Description>

      <Title>Cover Tracks</Title>
      <Description>
        Can I release cover tracks? <br />
        Yes, you can upload cover tracks, but make sure you credit the original
        songwriters. If you don't have the necessary license, your release won't
        be distributed. Sampling on Beats
      </Description>

      <Title>Sampling on Beats</Title>
      <Description>
        I use samples in my beats. <br />
        Is that allowed? Using samples is fine, as long as you have permission
        from the copyright holder of the music and the owner of the recording,
        which is often the record label. Make sure you've got the proper
        permissions for any samples you use.
      </Description>

      <Title>Artist Name Change</Title>
      <Description>
        Can I change my artist name? <br />
        If you haven't uploaded any music yet, it's best to create a new account
        with your new artist name. If you've already uploaded music under your
        current name, we can help you change it. Just fill out a form, and if
        needed, update your artwork.
      </Description>

      <Title>Song promotion</Title>
      <Description>
        Can you promote my new song? Of course! Singnify offers promotion
        services for songs on various platforms, including our app
      </Description>

      <Title>Song Types</Title>
      <Description>
        What kinds of songs can be uploaded? We're open to all types of music!
        Whether it's Christian, Native, Highlife, Jazz, Hip Hop, Soul, Blues, or
        traditional music, we accept them all.
      </Description>

      <Title>Playlist Placement</Title>
      <Description>
        How can I get my songs on playlists? <br />
        Building up your streams in your own community, like through social
        media and with the help of friends, is a key way to get more visibility
        and possibly land on playlists. We also offer promotional services that
        include getting your music on iTunes and Spotify playlists.
      </Description>

      <Title> Closing of Accounts</Title>
      <Description>
        How Can I Close My Account? <br />
        We are always sorry to lose clients, but simply email
        contact@singnify.com and we’ll act on your request
      </Description>
    </Container>
  );
}

export default FAQs;

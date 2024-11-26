import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import {
  IoShuffle,
  IoPlaySkipBack,
  IoPlaySkipForward,
  IoPauseOutline,
} from "react-icons/io5";
import { FaPlay } from "react-icons/fa6";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { RiRepeat2Fill } from "react-icons/ri";
import { convertDurationToSeconds, formatTime } from "../../Library/Common";
import {
  clearPlayerData,
  setCurrentTrackIndex,
  setIsAudioPlaying,
  setIsAudioPlayingData,
} from "../../redux/features/user/userSlice";
import { COLORS } from "../../theme/theme";

const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: black;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;

  @media (max-width: 768px) {
    height: 60px;
    padding: 0 10px;
  }
`;

const TrackInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 100%;
  // background: red;
  overflow: hidden;

  img {
    height: 60px;
    width: 60px;
    margin-right: 10px;
    border-radius: 4px;
  }

  div {
    flex-grow: 1; /* Allow the text container to take available space */
  }

  p {
    margin: 0;
    font-size: 0.9rem;

    &:first-child {
      font-weight: bold;
    }

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 40px;
      width: 40px;
    }
  }
`;

const ItemImage = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 10px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ItemName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin: 10px 0 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  // background: green;
  width: 100%;
  color: white;
`;

const ItemArtist = styled.p`
  font-size: 0.9rem;
  color: white;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
`;

const ControlsSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  //   background: red;
  width: 70%;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //   background: red;
  width: 25%;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const VolumeSlider = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  //   background: green;
  flex-direction: row;

  input {
    width: auto;

    @media (max-width: 768px) {
      width: 80px;
    }
  }
`;

const ProgressBarContainer = styled.div`
  width: 90%;
  position: relative;
  height: 4px;
  // background-color: blue;
  border-radius: 2px;
  margin-top: 10px;
  // flex-direction: "row";
  // justify-content: "space-between";
`;

const ProgressSection = styled.div`
  flex-direction: row;
  // background-color: pink;
  width: 80%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  align-contents: center;
  height: 20px;
`;

const TrackDuration = styled.p`
  color: white;
  font-size: 14px;
  font-weight: "600";
  // background-color: blue;
`;

const ProgressBar = styled.div`
  height: 100%;
  background: ${({ progressValue }) =>
    `linear-gradient(to right, #4caf50 ${progressValue}%, #ccc ${progressValue}%)`};
  width: ${({ progress }) => `${progress}%`};
  border-radius: 2px;
  width: 75%;
  z-index: 2;
  cursor: pointer;
  border-radius: 2px;
`;

// const ProgressInputRange = styled.input`
//   width: 100%;
//   position: absolute;
//   top: -4px; /* Move thumb to sit on top of the line */
//   left: 0;
//   height: 6px; /* Height matches the thumb size */
//   appearance: none;
//   background: ${({ progressValue }) =>
//     `linear-gradient(to right, #4caf50 ${progressValue}%, #ccc ${progressValue}%)`};
//   z-index: 2;
//   cursor: pointer;
//   border-radius: 2px;

//   &::-webkit-slider-thumb {
//     appearance: none;
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
//     background: #000;
//     cursor: pointer;
//     margin-top: -4px; /* Center the thumb on the line */
//   }

//   &::-moz-range-thumb {
//     width: 12px;
//     height: 12px;
//     border-radius: 50%;
//     background: #05a30b;
//     cursor: pointer;
//   }

//   &::-ms-thumb {
//     width: 12px;
//     height: 12px;
//     border-radius: 50%;
//     background: #4caf50;
//     cursor: pointer;
//   }

//   &::-webkit-slider-runnable-track {
//     height: 2px; /* Thin line for the track */
//     background: transparent;
//   }

//   &::-moz-range-track {
//     height: 4px;
//     background: transparent;
//   }

//   &::-ms-track {
//     height: 4px;
//     background: transparent;
//     border-color: transparent;
//     color: transparent;
//   }
// `;

const VolumeInputRange = styled.input`
  width: 100%;
  top: -4px;
  left: 0;
  height: 6px;
  appearance: none;
  background: ${({ volumeValue }) =>
    `linear-gradient(to right, green ${volumeValue}%, grey ${volumeValue}%)`};
  z-index: 2;
  cursor: pointer;
  border-radius: 5px;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    margin-top: -4px; /* Center the thumb on the line */
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #05a30b;
    cursor: pointer;
  }

  &::-ms-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    height: 4px;
    background: transparent;
  }

  &::-moz-range-track {
    height: 4px;
    background: transparent;
  }

  &::-ms-track {
    height: 4px;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
`;

const PlaySection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #05a30b;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  align-self: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// const CurrentTime = styled.span`
//   font-size: 12px;
//   color: #ffffff;
//   margin-right: 10px;
//   width: 40px;
//   text-align: right;
// `;

const ShuffleIcon = styled(IoShuffle)`
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

const SpeakerIcon = styled(HiMiniSpeakerWave)`
  color: white;
  font-size: 15px;
  cursor: pointer;
`;

const SkipBackIcon = styled(IoPlaySkipBack)`
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

const SkipForwardIcon = styled(IoPlaySkipForward)`
  color: ${({ isDisabled }) => (isDisabled ? "#ccc" : "#fff")};
  font-size: 20px;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};
`;

const PlayIcon = styled(FaPlay)`
  color: white;
  font-size: 20px;
  cursor: pointer;
  // background: #005903;
`;

const PauseIcon = styled(IoPauseOutline)`
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const RepeatIcon = styled(RiRepeat2Fill)`
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

const MusicPlayer = ({}) => {
  const audioRef = useRef(new Audio());

  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  // const audioRef = state?.user.audioRef;
  const isAudioPlayingData = state?.user?.isAudioPlayingData;
  const isAudioPlaying = state?.user?.isAudioPlaying;
  console.log("isAudioPlaying", isAudioPlaying);
  console.log("isAudioPlayingData", isAudioPlayingData);

  const currentTrackIndex = state?.user?.currentTrackIndex;
  const trackList = state?.discover?.topTracks;

  const [currentTrack, setCurrentTrack] = useState(
    isAudioPlayingData ? isAudioPlayingData : null
  );

  const [volume, setVolume] = useState(30);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [shuffledTrackList, setShuffledTrackList] = useState([]);
  const [isRepeat, setIsRepeat] = useState(false);

  const [isPlaying, setIsPlaying] = useState(isAudioPlaying);
  const [isLoading, setIsLoading] = useState(false);
  console.log("ooopp", audioDuration, currentTime, isPlaying, isLoading);

  // Check if it's the last track
  const isLastTrack = currentTrackIndex === trackList?.length - 1;
  console.log("isLastTrack", isLastTrack);

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;

    // Ensure that the current audioRef is valid before trying to set the volume
    if (audioRef.current) {
      setVolume(newVolume);
      audioRef.current.volume = newVolume / 100;
      console.log("New volume:", newVolume / 100);
    }
  };

  const handlePlayPause = () => {
    console.log("playpause pressed");
    if (!audioRef.current) return;

    // if (isLoading) return; // Prevent triggering while audio is loading

    if (!isPlaying) {
      setIsLoading(true); // Start loading

      // Ensure the play request is properly handled
      audioRef.current
        .play()
        .then((res) => {
          console.log("playing reess", res);
          // Listen for the 'playing' event to confirm the audio is actually playing
          audioRef.current.onplaying = () => {
            console.log("started playing");

            setIsPlaying(true); // Audio is now playing
            dispatch(setIsAudioPlaying(true)); // Update Redux state
            setIsLoading(false); // Loading complete
          };

          // Listen for errors during playback
          audioRef.current.onerror = (error) => {
            console.error("Error playing audio:", error);
            setIsLoading(false); // Ensure loading stops even if there's an error
          };
        })
        .catch((error) => {
          console.error("Error initiating audio play:", error);
          setIsLoading(false); // Ensure loading stops even if there's an error
        });
    } else {
      // setIsLoading(true); // Start loading
      audioRef.current.pause();
      audioRef.current.onpause = () => {
        setIsPlaying(false); // Audio is paused
        dispatch(setIsAudioPlaying(false)); // Update Redux state
        setIsLoading(false); // Loading complete
      };
    }
  };

  // Play the next track, considering shuffle
  const playNextTrack = () => {
    const list = isShuffle ? shuffledTrackList : trackList;
    const nextTrackIndex = currentTrackIndex + 1;

    if (nextTrackIndex < list.length) {
      dispatch(setCurrentTrackIndex(nextTrackIndex));
      playTrack(list[nextTrackIndex]);
    }
    // If repeat is on, play the current track again
    else if (isRepeat) {
      playTrack(list[currentTrackIndex]); // Repeat the current track
      return;
    }
  };

  const playTrack = (track) => {
    console.log("newww", track);
    dispatch(setIsAudioPlaying(true));
    dispatch(setIsAudioPlayingData(track));

    if (!audioRef.current) return;

    if (audioRef.current) {
      audioRef.current.src = track?.audio;
      audioRef.current.load(); // Ensure audio metadata is loaded before playing

      audioRef.current.onloadedmetadata = () => {
        setAudioDuration(audioRef.current.duration); // Set the track's duration once metadata is loaded
        console.log("Track duration:", audioRef.current.duration);
      };

      audioRef.current
        .play()
        .then(() => {
          // Ensure play starts, handle any errors here
          console.log(`Playing: ${track?.label}`);

          // Add an event listener for when the track ends
          audioRef.current.onended = () => {
            if (isRepeat) {
              // If repeat is enabled, play the same track again
              playTrack(track);
            } else {
              // Otherwise, play the next track
              playNextTrack();
            }
          };
        })
        .catch((error) => {
          console.error("Error playing track:", error);
          dispatch(setIsAudioPlaying(false));
        });
    }
  };

  // Handle the previous button click (plays the previous song)
  const playPreviousTrack = () => {
    if (trackList.length === 0) return;

    if (currentTrackIndex === null) {
      // If no track is playing, do nothing
      return;
    } else if (currentTrackIndex > 0) {
      const previousTrackIndex = currentTrackIndex - 1;
      dispatch(setCurrentTrackIndex(previousTrackIndex));
    } else {
      console.log("Already at the first track");
    }
  };

  // Handle shuffle button click
  const handleShuffle = () => {
    setIsShuffle((prevShuffle) => !prevShuffle);

    if (!isShuffle) {
      // Shuffle the track list when shuffle is turned on
      const shuffledTracks = [...trackList]?.sort(() => Math.random() - 0.5);
      setShuffledTrackList(shuffledTracks);
    } else {
      // Revert to original track order when shuffle is turned off
      setShuffledTrackList([]);
    }
  };

  // Handle repeat toggle
  const toggleRepeat = () => {
    setIsRepeat((prevRepeat) => !prevRepeat);
  };

  // here i am listening to the change in the redux audioData
  useEffect(() => {
    if (isAudioPlayingData) {
      setCurrentTrack(isAudioPlayingData);

      playTrack(isAudioPlayingData);
    }
    console.log("currenttrackkkkkk", currentTrack);
  }, [isAudioPlayingData?.audio]);

  // here i am listening to the change in the isAudioPlaying to trigger the playing and pausing of tracks
  useEffect(() => {
    if (isAudioPlaying) {
      handlePlayPause();
    }
    console.log("isAudioPlayingisAudioPlaying", isAudioPlaying);
  }, [isAudioPlaying]);

  // Handle playing the track when currentTrackIndex changes
  useEffect(() => {
    if (currentTrackIndex !== null && trackList[currentTrackIndex]) {
      playTrack(trackList[currentTrackIndex]);
    }
  }, [currentTrackIndex]);

  useEffect(() => {
    if (audioRef.current) {
      // Handler to set duration when metadata is loaded
      const handleLoadedMetadata = () => {
        setAudioDuration(audioRef.current.duration);
      };

      // Handler to update progress as the track plays
      const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        const percentage =
          (audioRef.current.currentTime / audioRef.current.duration) * 100;
        console.log("progressPercentage", percentage.toFixed(2));

        if (percentage > 0) {
          dispatch(setIsAudioPlaying(true));
        }
        setProgress(percentage);
      };

      // Attach the event listeners
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

      // Cleanup event listeners on component unmount
      return () => {
        audioRef.current.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [audioRef.current]);

  useEffect(() => {
    if (audioRef.current) {
      // Ensure the volume is set when the component mounts or when the audio changes
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef.current]);

  const cleardata = () => {
    dispatch(clearPlayerData());
  };

  return (
    <>
      {isAudioPlayingData && (
        <PlayerContainer>
          <TrackInfo>
            <ItemImage
              src={isAudioPlayingData?.image}
              alt={isAudioPlayingData?.title}
            />
            <div style={{ flex: "1 1 0", overflow: "hidden" }}>
              <ItemName>{isAudioPlayingData?.track_name}</ItemName>
              <ItemArtist>{isAudioPlayingData?.label}</ItemArtist>
            </div>
          </TrackInfo>
          <ControlsSection>
            <Controls>
              <ShuffleIcon
                onClick={handleShuffle}
                style={{
                  color: isShuffle && COLORS.appBgColor1,
                  fontWeight: isShuffle && "bold",
                }}
              />

              <SkipBackIcon onClick={playPreviousTrack} />
              <PlaySection onClick={handlePlayPause}>
                {isAudioPlaying ? (
                  <PauseIcon onClick={handlePlayPause} />
                ) : (
                  <PlayIcon onClick={handlePlayPause} />
                )}
              </PlaySection>
              <SkipForwardIcon
                onClick={playNextTrack}
                isDisabled={isLastTrack}
              />
              <RepeatIcon
                onClick={toggleRepeat}
                style={{
                  color: isRepeat && COLORS.appBgColor1,
                  fontWeight: isRepeat && "bold",
                }}
              />
            </Controls>

            {/* Progress Bar */}
            <ProgressSection>
              <TrackDuration>{formatTime(currentTime)}</TrackDuration>
              <ProgressBarContainer>
                {/* The input range for progress control */}
                <ProgressBar progress={progress} progressValue={progress} />
              </ProgressBarContainer>
              <TrackDuration>{formatTime(audioDuration)}</TrackDuration>
            </ProgressSection>
          </ControlsSection>

          {/* Volume Control */}
          <VolumeSlider>
            <SpeakerIcon />
            <VolumeInputRange
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              // Pass the volume value as a prop
              volumeValue={volume}
            />
          </VolumeSlider>
        </PlayerContainer>
      )}
    </>
  );
};

export default MusicPlayer;

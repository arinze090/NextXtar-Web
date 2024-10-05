import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import {
  IoShuffle,
  IoPlaySkipBackOutline,
  IoPlaySkipForwardOutline,
  IoPlay,
  IoPauseOutline,
} from "react-icons/io5";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { RiRepeat2Fill } from "react-icons/ri";
import { convertDurationToSeconds } from "../../Library/Common";
import { setIsAudioPlaying } from "../../redux/features/user/userSlice";

const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: white;
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

  img {
    height: 60px;
    width: 60px;
    margin-right: 10px;
    border-radius: 4px;
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
  //   background: green;
`;

const ItemArtist = styled.p`
  font-size: 0.9rem;
  color: grey;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  justify-content: space-around;
  //   background: red;
  width: 20%;

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
  width: 100%;
  position: relative;
  height: 4px;
  //   background-color: red;
  border-radius: 2px;
  margin-top: 10px;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #4caf50;
  width: ${({ progress }) => `${progress}%`};
  border-radius: 2px;
`;

const ProgressInputRange = styled.input`
  width: 100%;
  position: absolute;
  top: -4px; /* Move thumb to sit on top of the line */
  left: 0;
  height: 6px; /* Height matches the thumb size */
  appearance: none;
  background: ${({ progressValue }) =>
    `linear-gradient(to right, #4caf50 ${progressValue}%, #ccc ${progressValue}%)`};
  z-index: 2;
  cursor: pointer;
  border-radius: 2px;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #000;
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
    height: 2px; /* Thin line for the track */
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
    background: grey;
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
  background: black;
  border-radius: 50%;
  height: 50px;
  width: 50px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CurrentTime = styled.span`
  font-size: 12px;
  color: #ffffff;
  margin-right: 10px;
  width: 40px;
  text-align: right;
`;

const TotalDuration = styled.span`
  font-size: 12px;
  color: #ffffff;
  margin-left: 10px;
  width: 40px;
  text-align: left;
`;

const ShuffleIcon = styled(IoShuffle)`
  color: grey;
  font-size: 30px;
  cursor: pointer;
`;

const SpeakerIcon = styled(HiMiniSpeakerWave)`
  color: black;
  font-size: 15px;
  cursor: pointer;
`;

const SkipBackIcon = styled(IoPlaySkipBackOutline)`
  color: grey;
  font-size: 30px;
  cursor: pointer;
`;

const SkipForwardIcon = styled(IoPlaySkipForwardOutline)`
  color: grey;
  font-size: 30px;
  cursor: pointer;
`;

const PlayIcon = styled(IoPlay)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const PauseIcon = styled(IoPauseOutline)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const RepeatIcon = styled(RiRepeat2Fill)`
  color: grey;
  font-size: 30px;
  cursor: pointer;
`;

const MusicPlayer = ({}) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const isAudioPlayingData = state?.user?.isAudioPlayingData;
  const isAudioPlaying = state?.user?.isAudioPlaying;
  console.log("isAudioPlaying", isAudioPlaying);
  console.log("isAudioPlayingData", isAudioPlayingData);

  const getTotalDurationOfTrack = convertDurationToSeconds(
    isAudioPlayingData?.duration
  );
  console.log("getTotalDurationOfTrack", getTotalDurationOfTrack);

  const audioRef = useRef(new Audio());

  const [volume, setVolume] = useState(50);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100; // Convert 0-100 scale to 0-1 scale
  };

  // Handle volume change
  const handleVolumeChange2 = (e) => {
    const newVolume2 = e.target.value;
    setProgress(newVolume2);
    audioRef.current.progress = newVolume2 / 100;
  };

  // Handle progress change
  const handleProgressChange = (e) => {
    // const newProgress = e.target.value;
    // const newTime = (newProgress / 100) * audioRef.current.duration;
    // audioRef.current.currentTime = newTime;
    // setProgress(newProgress);

    const newTime = e.target.value;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const handlePlayPause = () => {
    if (!audioRef.current.paused) {
      audioRef.current.pause();
      dispatch(setIsAudioPlaying(false));
    } else {
      audioRef.current.play();
      // save the selected track and the playing status to redux
      dispatch(setIsAudioPlaying(true));
    }
  };

  // useEffect(() => {
  //   if (audioElement) {
  //     const onLoadedMetadata = () => {
  //       setAudioDuration(audioElement.duration);
  //     };
  //     audioElement.addEventListener("loadedmetadata", onLoadedMetadata);
  //     return () => {
  //       audioElement.removeEventListener("loadedmetadata", onLoadedMetadata);
  //     };
  //   }
  // }, [audioElement]);

  //   useEffect(() => {
  //     if (isPlaying) {
  //       audioRef.current.play();
  //     } else {
  //       audioRef.current.pause();
  //     }

  //     // Set duration when the metadata is loaded
  //     audioRef.current.onloadedmetadata = () => {
  //       setDuration(audioRef.current.duration);
  //     };

  //     // Update progress as the song plays
  //     const updateProgress = () => {
  //       setProgress(
  //         (audioRef.current.currentTime / audioRef.current.duration) * 100
  //       );
  //     };

  //     audioRef.current.ontimeupdate = updateProgress;

  //     return () => {
  //       audioRef.current.pause();
  //       audioRef.current.ontimeupdate = null;
  //     };
  //   }, [isPlaying]);

  return (
    <>
      {isAudioPlayingData && (
        <PlayerContainer>
          <TrackInfo>
            <ItemImage
              src={isAudioPlayingData?.image}
              alt={isAudioPlayingData?.title}
            />
            <div>
              <ItemName>{isAudioPlayingData?.track_name}</ItemName>
              <ItemArtist>{isAudioPlayingData?.label}</ItemArtist>
            </div>
          </TrackInfo>
          <ControlsSection>
            <Controls>
              <ShuffleIcon />
              <SkipBackIcon />
              <PlaySection onClick={handlePlayPause}>
                {isAudioPlaying ? (
                  <PauseIcon onClick={handlePlayPause} />
                ) : (
                  <PlayIcon onClick={handlePlayPause} />
                )}
              </PlaySection>
              <SkipForwardIcon />
              <RepeatIcon />
            </Controls>

            {/* Progress Bar */}
            <ProgressBarContainer>
              {/* The input range for progress control */}
              <ProgressInputRange
                type="range"
                min="0"
                max={audioDuration}
                value={currentTime}
                onChange={handleProgressChange}
                progressValue={progress}
              />
            </ProgressBarContainer>
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

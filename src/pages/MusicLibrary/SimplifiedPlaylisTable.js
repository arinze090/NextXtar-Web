import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaPlay } from "react-icons/fa";
import { MdOutlinePlaylistRemove } from "react-icons/md";

import Ellipsis from "../../components/modal/Ellipsis";
import { baseURL } from "../../utils/api-client";
import { API_KEY } from "../../utils/devKeys";

const TableContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    overflow-x: auto;
    margin-top: 20px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  text-align: left;
  font-size: 1rem;
  color: #fff;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 5px;
  }
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 10px;
  vertical-align: middle;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 5px;
  }
`;

const AlbumImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const IconWrapper = styled.span`
  margin-right: 5px;
  cursor: pointer;
`;

const ActionIcons = styled.div`
  display: flex;
  align-items: center;
`;

const SimplifiedView = ({ playlist, onClick }) => {
  const state = useSelector((state) => state);
  const user = state.user.user;

  const [loading, setLoading] = useState(false);

  const [playlistTracks, setPlaylistTracks] = useState(playlist);

  // for the audio playing
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const audioRef = useRef(new Audio());

  const onPlayClick = (audioUrl) => {
    console.log("currrr", audioUrl?.audio);
    setCurrentPlaying(audioUrl?.audio);

    if (currentPlaying === audioUrl?.audio) {
      if (!audioRef.current.paused) {
        audioRef.current.pause();
        setIsAudioPlaying(false);
      } else {
        audioRef.current.play();
        setIsAudioPlaying(true);
      }
    } else {
      audioRef.current.pause();
      audioRef.current.src = audioUrl?.audio;
      audioRef.current.play();
      setCurrentPlaying(audioUrl?.audio);
    }
  };

  const removeTrackFromPlaylist = async (playlistItem) => {
    setLoading(true);

    const form = new FormData();
    form.append("id", playlistItem?.id);

    try {
      await axios
        .post(`${baseURL}remove-playlist-track.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            console.log("removeTrackFromPlaylist data", res?.data);
            const updatedData = playlist.filter(
              (item) => item.id !== playlistItem?.id
            );
            setPlaylistTracks(updatedData);
            toast.success(
              `You removed ${playlistItem?.track_name} from this playlist`
            );
          } else {
            console.log("removeTrackFromPlaylist message", res?.data?.status);
          }
        })
        .catch((err) => {
          console.log("removeTrackFromPlaylist err", err);
          setLoading(false);
        });
    } catch (error) {
      console.log("removeTrackFromPlaylist error", error);
    }
  };

  return (
    <TableContainer>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>#</TableHeader>
            <TableHeader>Title</TableHeader>
            <TableHeader>Actions</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {playlistTracks?.map((song, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <AlbumImage src={song?.image} alt={song?.track_name} />
                  <div>
                    <div style={{ color: "#ccc" }}>{song?.track_name}</div>
                    <div style={{ color: "#ccc" }}>{song?.label}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <ActionIcons>
                  <IconWrapper
                    onClick={() => {
                      onPlayClick(song);
                      console.log("song", song);
                    }}
                  >
                    <FaPlay />
                  </IconWrapper>
                  <IconWrapper
                    onClick={() => {
                      removeTrackFromPlaylist(song);
                    }}
                  >
                    <MdOutlinePlaylistRemove
                      style={{ fontSize: 20, color: "white" }}
                    />
                  </IconWrapper>
                  <IconWrapper>
                    <Ellipsis playlistItem={song} />
                  </IconWrapper>
                </ActionIcons>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default SimplifiedView;

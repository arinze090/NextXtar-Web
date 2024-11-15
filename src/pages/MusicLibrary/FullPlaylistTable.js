import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { MdOutlinePlaylistRemove } from "react-icons/md";

import Ellipsis from "../../components/modal/Ellipsis";
import { formatTimestampToDate } from "../../Library/Common";
import { baseURL } from "../../utils/api-client";
import { API_KEY } from "../../utils/devKeys";
import {
  setIsAudioPlaying,
  setIsAudioPlayingData,
} from "../../redux/features/user/userSlice";

const TableContainer = styled.div`
  display: block;
  width: 100%;
  overflow-x: auto;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: none;
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
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 10px;
  vertical-align: middle;
  color: #fff;
`;

const AlbumImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  margin-right: 10px;
`;

const IconWrapper = styled.span`
  margin-right: 5px;
  cursor: pointer;
`;

const ActionIcons = styled.div`
  display: flex;
  align-items: center;
`;

const FullTableView = ({ playlist, onClick }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const isAudioPlayingData = state?.user?.isAudioPlayingData;
  const isAudioPlaying = state?.user?.isAudioPlaying;

  const [loading, setLoading] = useState(false);

  const [playlistTracks, setPlaylistTracks] = useState(playlist);

  const onPlayClicked = (selectedTrack) => {
    console.log("selectedTrack", selectedTrack);
    // just send the data to redux
    dispatch(setIsAudioPlaying(true));
    dispatch(setIsAudioPlayingData(selectedTrack));
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
            <TableHeader>Album</TableHeader>
            <TableHeader>Date added</TableHeader>
            <TableHeader>Time</TableHeader>
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
                    <div>{song?.track_name}</div>
                    <div style={{ color: "#ccc" }}>{song?.label}</div>
                    <div
                      style={{
                        color: "#ccc",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <IconWrapper>
                        <IoMdCloudDownload />
                      </IconWrapper>
                      {song?.no_downloads}
                      <IconWrapper style={{ marginLeft: "10px" }}>
                        <FaPlay style={{ fontSize: 12 }} />
                      </IconWrapper>
                      {song?.no_plays}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{song?.label}</TableCell>
              <TableCell>{formatTimestampToDate(song?.time_number)}</TableCell>
              <TableCell>{song?.duration}</TableCell>
              <TableCell>
                <ActionIcons>
                  <IconWrapper
                    onClick={() => {
                      onPlayClicked(song);
                    }}
                  >
                    {isAudioPlaying && isAudioPlayingData?.id === song?.id ? (
                      <FaPause style={{ fontSize: 20, color: "white" }} />
                    ) : (
                      <FaPlay style={{ fontSize: 20, color: "white" }} />
                    )}
                  </IconWrapper>
                  <IconWrapper
                    onClick={() => {
                      removeTrackFromPlaylist(song);
                      console.log("song", song);
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

export default FullTableView;

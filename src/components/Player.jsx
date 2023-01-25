import React, { useContext } from "react";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import { MoviesContext } from "../App";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    background: "#rgba(120,120,120,0.5)",
  },
};

const Player = (props) => {
  const { trailer } = props;
  const { isOpen, onCloseModal } = useContext(MoviesContext);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      center
    >
      <div className="titleCloseBtn">
        <button onClick={onCloseModal}>X</button>
      </div>
      <ReactPlayer url={trailer} width="100%" height="calc(100vh - 100px)" />
    </Modal>
  );
};

export default Player;

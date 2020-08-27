import React from "react";
import Modal from "./Modal";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

export default function App() {
  return (
    <>
      <h1>
        Using Portal with Modal learned from
        https://www.youtube.com/watch?v=LyLa7dU5tp8
      </h1>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button>Open Modal</button>

        <Modal>Fancy Modal</Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  );
}

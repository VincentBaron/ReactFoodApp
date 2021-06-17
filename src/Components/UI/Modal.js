import classes from "./Modal.module.css";
import React from "react";
import ReactDOM from 'react-dom'

function Backdrop(props) {

  function Quit() {
    props.onClick(false)
  } 
    
  return <div className={classes.backdrop} onClick={Quit}/>;
}

function ModalContent(props) {
  return <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
  </div>;
}

function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick}/>,
        document.getElementById("modal-backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalContent >{props.children}</ModalContent>,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
}

export default Modal;

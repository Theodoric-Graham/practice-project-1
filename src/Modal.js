const Modal = (props) => {
  return (
    <div
      className={`modal-${!props.error ? "hidden" : "show"}`}
    >{`Incorrect ${props.error}`}</div>
  );
};

export default Modal;

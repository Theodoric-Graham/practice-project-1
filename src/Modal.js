const Modal = (props) => {
  return (
    <div className={`modal-${!props.error ? "hidden" : "show"}`}>
      {`Incorrect ${props.error}`}
      <button>Close</button>
    </div>
  );
};

export default Modal;

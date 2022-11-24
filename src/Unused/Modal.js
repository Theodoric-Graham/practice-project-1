//Unused original code

const Modal = (props) => {
  const closeModalHandler = () => {
    props.errorCheck(null);
  };

  return (
    <div className={`modal-${!props.error ? "hidden" : "show"}`}>
      {`Incorrect ${props.error}`}
      <button onClick={closeModalHandler}>Close</button>
    </div>
  );
};

export default Modal;

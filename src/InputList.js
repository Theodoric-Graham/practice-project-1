import InputItem from "./InputItem";

const InputList = (props) => {
  return (
    <ul className="info-list">
      {props.items.map((info) => (
        <InputItem key={info.id} id={info.id} onDelete={props.onDeleteItem}>
          {info.text}
        </InputItem>
      ))}
    </ul>
  );
};

export default InputList;

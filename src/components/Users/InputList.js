import Card from "../UI/Card";

const InputList = (props) => {
  return (
    <ul className="info-list">
      {props.items.map((info) => (
        <li>
          {info.name} ({info.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default InputList;

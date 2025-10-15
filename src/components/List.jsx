import ListItem from "./ListItem";

const List = ({ title }) => {
  return (
    <div className="list__wrapper">
      <div className="list__title">{title}</div>
      <div className="list">
        <ListItem title={1} />
        <ListItem title={2} />
        <ListItem title={3} />
      </div>
    </div>
  );
};

export default List;

const ListItem = ({ title }) => {
  return (
    <div className="list__item">
      <button className="list__item-btn">+</button>
      <div className="list__item-title">{title}</div>
      <button className="list__item-btn">?</button>
      <button className="list__item-btn">-</button>
    </div>
  );
};

export default ListItem;

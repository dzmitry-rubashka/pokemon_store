const List = ({items, renderItems}) => {
  return (
    <div>
      {items.map(renderItems)}
    </div>
  );
};

export default List;
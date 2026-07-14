import React from "react";

interface Props {
  name: string;
  check?: boolean;
}

const Item: React.FC<Props> = ({ name, check }) => {
  // if (check) {
  //     return <div className="item">✅ <del>{name}</del></div>
  // }

  // return <div className="item">⬜ {name}</div>

  let itemName: React.ReactNode = name;

  if (check) {
    itemName = <del>{name}</del>;
  }

  return (
    <div className="item">
      {check ? "✅" : "⬜"}
      {itemName}
    </div>
  );
};

export default Item;

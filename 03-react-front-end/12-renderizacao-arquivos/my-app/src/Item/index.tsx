import React, { useState } from "react";

interface Props {
  name: string;
  check?: boolean;
}

const Item: React.FC<Props> = ({ name, check }) => {
  const [isChecked, setCheck] = useState(check ?? false);

  const handleClick = () => {
    setCheck(!isChecked);
  };

  let itemName: React.ReactNode = name;

  if (isChecked) {
    itemName = <del>{name}</del>;
  }

  return (
    <div className="item" onClick={handleClick}>
      {isChecked ? "✅" : "⬜"}
      {itemName}
    </div>
  );
};

export default Item;

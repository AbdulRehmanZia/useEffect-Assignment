import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const EcommerceCard = ({ item }) => {
  const { image, price, title, description } = item;
  return (
    <Card className=" bg-gray-200"
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <img
          src={image}
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );
};
export default EcommerceCard;

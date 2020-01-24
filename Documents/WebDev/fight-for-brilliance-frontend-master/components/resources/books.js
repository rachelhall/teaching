import React from "react";

import Card from "./card";

const Books = ({ data }) => {
  if (data) {
    return (
      <>
        {data.map(d => {
          return <Card key={d.id} data={d} />;
        })}
      </>
    );
  } else {
    return null;
  }
};

export default Books;

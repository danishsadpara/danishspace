import React from "react";

const page = ({
  params,
}: {
  params: {
    productid: string;
  };
}) => {
  return <div>product {params.productid}</div>;
};

export default page;

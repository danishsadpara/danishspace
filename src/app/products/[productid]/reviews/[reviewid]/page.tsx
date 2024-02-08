import React from "react";

const Review = ({
  params,
}: {
  params: {
    productid: string;
    reviewid: string;
  };
}) => {
  return (
    <div>
      this is nexted dynamic routing this is {params.reviewid} Review of{" "}
      {params.productid} product
    </div>
  );
};

export default Review;

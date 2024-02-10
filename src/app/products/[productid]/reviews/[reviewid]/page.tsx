import React from "react";
import { notFound } from "next/navigation";

interface IParams {
  params: {
    productid: string;
    reviewid: string;
  };
}
const Review = ({ params }: IParams) => {
  if (parseInt(params?.reviewid) > 1000) {
    notFound();
  }
  return (
    <div>
      this is nexted dynamic routing this is {params.reviewid} Review of
      {params.productid} product
    </div>
  );
};

export default Review;

import React from "react";

const docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  if (params.slug?.length === 2) {
    return (
      <h3>
        we are viewing {params.slug[0]} feature and concept {params.slug[1]}
      </h3>
    );
  }
  if (params.slug?.length === 1) {
    return <>you are viewing only the feature {params.slug[0]}</>;
  }
  return (
    <div>
      <h4>if we put [[]] then it is called nested </h4>
      <h1>This is catch all segments routing</h1>
      <h3>This is basically used for documentation feature</h3>
    </div>
  );
};

export default docs;

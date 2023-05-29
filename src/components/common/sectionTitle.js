import React from "react";

const SectionTitle = ({ title }) => {
  const titleParts = title.split(" ");

  return (
    <h2 className="mb-4 text-capitalize">
      {titleParts[0]}{" "}
      <span className="opacity-50">{titleParts.slice(1).join(" ")}</span>
    </h2>
  );
};

export default SectionTitle;

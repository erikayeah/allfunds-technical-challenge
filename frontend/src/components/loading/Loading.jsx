import React from "react";
import loading from "../../assets/loading.gif";

const Loading = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img
        src={loading}
        alt="Loading..."
        style={{ width: "80px", height: "80px", objectFit: "contain" }}
      />
    </div>
  );
};

export default Loading;

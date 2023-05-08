import React from "react";
import { images } from "../../utils/images";

function LoadingComponent() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <img src={images.loading} alt="loading" />
    </div>
  );
}
export default LoadingComponent;

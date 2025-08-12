import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Spinner animation="border" />
    </div>
  );
};

export default Loading;

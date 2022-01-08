import "./Loading.css";
import loader from "../../assets/loader.svg";

const Loading = () => {
  return (
    <div className="loading">
      <img src={loader} alt="Loading..." width="250px" height="250px" />
    </div>
  );
};

export default Loading;

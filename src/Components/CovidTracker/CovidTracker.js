import Draggable from "react-draggable";
import "./CovidTracker.css";

const style0 = {
  color: "#0066ff",
  fontWeight: "bold",
  textAlign: "center",
  margin: '10px'
};
const style1 = {
  color: "#0066ff",
  fontWeight: "bold",
};
const style2 = {
  color: "#ff5050",
  fontWeight: "bold",
};
const style3 = {
  color: "#00cc00",
  fontWeight: "bold",
};
const style4 = {
  fontSize: "large",
  fontWeight: "bold", 
};

let today = new Date().toLocaleDateString();
const covidTracker = (props) => {
  return (
    <Draggable>
    <div className="Covid">
      <h1 style={style4}>Covid-19 tracker</h1>
      <h3 style={style0}>United States :</h3>
      <h5>Last update : {today}</h5>
      <div className="data">
        <div>
          <p style={style1}>Total confirmed:</p>
          <p style={style1}>{props.confirmed}</p>
        </div>
        <div>
          <p style={style2}>Total deaths:</p>
          <p style={style2}>
            {props.deaths} (+{props.deathIncrease})
          </p>
        </div>
        <div>
          <p style={style3}>Total recovered:</p>
          <p style={style3}>{props.recovered}</p>
        </div>
      </div>
    </div>
    </Draggable>
  );
};

export default covidTracker;

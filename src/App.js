import "./styles.css";
import data from "./data.js";
export default function App() {
  return (
    <div className="App">
      <h1>See Readme or click the link below</h1>
      <a href="instructions.html">Click here to see instructions.</a>
      <div className="outer">
        {
          data.map((item) => (
            <div className="inner" key={item.artistId}>
              <div className="card" key={item.artistId}>
                <img src={item.image} alt={item.artistId}/>
                <div className="mask" key={item.artistId}>{item.artistName}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

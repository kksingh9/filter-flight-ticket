import { useState } from "react";
import "./filter.scss";
import useFilter from "./usefilter";

const Filter = () => {
  const [term, setTerm] = useState("");
  
  const [filter] = useFilter(
    "https://flight-a262e-default-rtdb.firebaseio.com/maintainer.json"
  );
 
  const list = filter.filter(
    (filt) =>
      filt.price.indexOf(term) >= 0 ||
      filt.flight.indexOf(term) >= 0 ||
      filt.arrival.indexOf(term) >= 0 ||
      filt.departure.indexOf(term) >= 0
  );

  return (
    <div>
      <h1>Filter </h1>
      <div className="filter">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="search"
        />
      </div>
      <div className="heading">
        <table>
          <tr>
            <th>from</th>
            <th>departure</th>
            <th>flight</th>
            <th>to</th>
            <th>arrival</th>
            <th>price</th>
          </tr>
        </table>
      </div>
      {list.map((user) => (
        <div key={user.id} className="items">
          <table>
            <tr>
              <td>{user.from}</td>
              <td>{user.departure}</td>
              <td>{user.flight}</td>
              <td>{user.to}</td>
              <td>{user.arrival}</td>
              <td>{user.price}</td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
};
export default Filter;

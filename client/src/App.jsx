import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://localhost:3000");
        setState(response.data);
      } catch (err) {
        console.log("Error while fetching the Data", err);
      }
    };
    fetchdata();
  }, []);

  return (
    <div>
      <ul>
        {state &&
          state.map((user, index) => {
            return (
              <li className="div" key={user.id}>
                <h1>
                  {user.id} : {user.title}
                </h1>
                <div>{user.body}</div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;

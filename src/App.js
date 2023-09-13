import React, { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import Board from "./components/Board";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupingOption, setGroupingOption] = useState("status"); // Default grouping option

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Define the API URL
    const apiUrl = "https://api.quicksell.co/v1/internal/frontend-assignment";

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched data to the state variables
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

// console.log(tickets);
 //console.log(users);
  return (
    <div className="App">
      <NavBar setGroupingOption={setGroupingOption} />
      {console.log(groupingOption)}
      <Board tickets={tickets} groupingOption={groupingOption} users={users} />
    </div>
  );
}

export default App;
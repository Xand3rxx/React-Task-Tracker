// import "./App.css";
import Header from "./components/Header";
import "./index.css";
// import React from "react";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "376d6479-264f-48ce-a61c-d40b3c013f6a",
      title: "Doctors Appointment",
      day: "Feb 5th at 2:20 pm",
      reminder: true,
    },
    {
      id: "bc5bf4e4-d1f8-4d70-8dbc-53bd873d10d2",
      title: "Group Study at School",
      day: "Feb 6th at 9:00 am",
      reminder: false,
    },
    {
      id: "24bbda9e-f2c5-47f2-b7e5-875ede989beb",
      title: "Dinner Reservation with Funsho",
      day: "Feb 7th at 8:00 pm",
      reminder: true,
    },
    {
      id: "02cbe749-9d6d-4a9b-9d5d-94a21aaf88d4",
      title: "Project Review at the Office",
      day: "Feb 8th at 10:15 am",
      reminder: true,
    },
    {
      id: "3fc6d41a-5837-4331-87fb-380c68e1a7e2",
      title: "Soccer Practice",
      day: "Feb 9th at 6:30 pm",
      reminder: false,
    },
  ]);

  // Delete task
  const deleteTask = (id) => {
    // console.log('Delete => ', id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder task
  const toggleReminder = (id) => {
    // console.log("Toggled => ", id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Test Tracker" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No tasks available. Click the "Add More" button to add tasks.'
      )}
    </div>
  );
}

// Class styles for React
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <Header /> */}

//         <h3 className="App-header">Returning a view from a class.</h3>
//       </div>
//     );
//   }
// }

export default App;

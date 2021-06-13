import "./App.css";
import ListUser from "./components/list-user";

function App() {
  let user = [
    { id: "1", name: "Pankaj" },
    { id: "2", name: "Dheeraj" },
    { id: "3", name: "Neeraj" },
    { id: "4", name: "Harsh" },
    { id: "5", name: "Gotti" },
  ];
  return (
    <div>
      <h1>Hello World!</h1>    
        <ListUser all_user={user} />
    </div>
  );
}

export default App;

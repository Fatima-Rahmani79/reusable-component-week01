import "./App.css";
import Table from "./components/Table";
import TableRow from "./components/TableRow";


// A mini project for Reusable Components practice
function App() {
  return (
    <>
    <h2 className="title">Week 1 Assignment - Simple Reusable Component</h2>
    <Table title={"User Information"}>
      <TableRow
        name={"Fatima"}
        age={25}
        phone={"077777000"}
        email={"fatima.rahmai79@gmail.com"}
      />
      <TableRow
        name={"Sana"}
        age={15}
        phone={"078888000"}
        email={"sana@gmail.com"}
      />
      <TableRow
        name={"Maryam"}
        age={30}
        phone={"076666000"}
        email={"maryam@gmail.com"} 
      />
      <TableRow
        name={"Ali"}
        age={20}
        phone={"074444000"}
        email={"ali@gmail.com"}
      />
      <TableRow
        name={"Ahmad"}
        age={27}
        phone={"071111100"}
        email={"ahmad@gmail.com"}
      />
      </Table>
    </>
  );
}

export default App;

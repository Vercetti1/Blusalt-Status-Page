import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import StatusTable from "./components/StatusTable.jsx";
import Calendar from "./components/Calendar.jsx";
import Status from "./components/Status.jsx";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Status/>
            <StatusTable />
          </>
        }
      />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
}

export default App;

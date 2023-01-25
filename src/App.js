import "./styles/App.css";
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";

export const MoviesContext = createContext(null);

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  };
  const onCloseModal = () => {
    setIsOpen(false);
  };

  const contextValue = {
    isOpen,
    onOpenModal,
    onCloseModal,
  };

  return (
    <div className="App">
      <MoviesContext.Provider value={contextValue}>
        <>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/:title/details" element={<Details />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </>
      </MoviesContext.Provider>
    </div>
  );
}

export default App;

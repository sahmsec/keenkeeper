import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />
      <ToastContainer />

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
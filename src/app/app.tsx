import { ToastContainer } from "react-toastify";
import { Home } from "../pages";
import { SpeedInsights } from "@vercel/speed-insights/next";
function App() {
  return (
    <>
      <SpeedInsights />
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;

import Navbar from "./components/navbar.jsx";
import MainRoute from "./Routes/mainRoute.jsx";

const App = () => {
  return (
    <div className="h-[100vh] text-white bg-neutral-700 px-5">
      <Navbar />
      <MainRoute />
    </div>
  );
};

export default App;

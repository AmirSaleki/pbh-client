import "./App.css";
import MainPage from "./components/MainPage/MainPage.component";
import Login from "./components/Login/Login.component";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.login.isAuthenticated);
  return <>{isLoggedIn ? <MainPage /> : <Login />}</>;
}

export default App;

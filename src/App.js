import "./App.css";
import apiV1 from "./api/config/api";

async function getUser() {
  try {
    const response = await apiV1.get("/user");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getWorld() {
  try {
    const response = await apiV1.get("/world");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const ergebnis = await getUser();
const ergebnis2 = await getWorld();

function App() {
  return (
    <h1>
      Meine Antwort von Axios: <br /> {ergebnis} <br />
      {ergebnis2}
    </h1>
  );
}

export default App;

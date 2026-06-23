import { AlertBox } from "./components/AlertBox";
import { SuccessBox } from "./components/SuccessBox";

function App() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        gap: "16px"
      }}
    >
      <AlertBox />
      <SuccessBox />
    </div>
  );
}

export default App;
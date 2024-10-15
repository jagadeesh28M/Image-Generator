import Bg from "./components/Bg";
import { Github } from "./components/Github";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="font-poppins flex items-center justify-center min-h-screen relative">
      <Bg />
      <Card />
      <div className="absolute bottom-4 right-4">
        <Github />
      </div>
    </div>
  );
}

export default App;

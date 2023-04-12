import { useState } from "react";
import Text from "./text";
import ImageComponent from "./image";
import "./text.css";
import "./App.css";

function App() {
  const [toggler, setToggler] = useState(true);
  
  return (
    <div className="App">
      <div className="wrapper">
        {toggler ? (
          <>
            <Text setToggler={setToggler}  />
            <ImageComponent/>
          </>
        ) : (
          <ImageComponent setToggler= {setToggler}/>
        )}
      </div>
    </div>
  );
}

export default App;

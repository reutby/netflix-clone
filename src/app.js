import React from "react";
import Jumbotron from "./components/jumbotron";
import JumboData from "./fixtures/jumbo.json";
import "normalize.css";
function App() {
  return (
      <Jumbotron.Container>
      {JumboData.map(jumbo=>{
        return (
        <Jumbotron key={jumbo.id} direction={jumbo.direction} >
          <Jumbotron.Pane>
              <Jumbotron.Title>{jumbo.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{jumbo.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={jumbo.image} alt={jumbo.alt}/>
          </Jumbotron.Pane>
          </Jumbotron>)
      })}

      </Jumbotron.Container>
    
  );
}

export default App;

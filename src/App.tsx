import styled from "styled-components";
import {useEffect, useState} from "react";
import AmericaStates  from "./components/AmericaStates.tsx";
import { AmericaState } from "./interfaces/AmericaState.ts";

const ParentDiv = styled.div`
   background-color: lightgray;
   width: 100vw;

`
function App() {
  const [res, setRes] = useState<AmericaState[]>([]);


    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
            const {data} : {data: AmericaState[]} = await rawData.json();
            setRes(data);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, []);


  return (
  <div>
    <ParentDiv>
      <AmericaStates data={res}/>
    </ParentDiv>

  </div>
  )
}

export default App

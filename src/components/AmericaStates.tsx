import styled from "styled-components";
import {AmericaState} from "../interfaces/AmericaState.ts";

const MainStateDiv = styled.div`
    color:blue;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
`;

const StateDiv = styled.div<{Nation:string}>`
    margin: 5px;
    padding: 5px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export default function AmericaStates(props: {data: AmericaState[]}) {
    return (
        <MainStateDiv>
            {
                props.data.map((s: AmericaState) => 
                        <StateDiv key={s.ID} Nation={s.Nation}>
                            <p>{s.Nation}</p>
                            <p>{s.Year}</p>
                            <p>{s.Population}</p>
                        </StateDiv>
                )
            }
        </MainStateDiv>
    );
}



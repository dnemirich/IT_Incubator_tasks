import React from 'react';
import {StyledCard} from "./components/Card.styled";
import card_picture from "./assets/images/card_picture.png"
import {StyledButton} from "./components/Button.styled";

function App() {
    return (
        <div className="App">
            <StyledCard>
                <img alt={"Picture of a desert"} src={card_picture}/>
                <h2>Headline</h2>
                <p>Faucibus. Faucibus. Sit sit sapien sit <br/>
                    tempusrisu ut. Sit molestie ornare in venen.</p>
                <div>
                    <StyledButton>See more</StyledButton>
                    <StyledButton>Save</StyledButton>
                </div>
            </StyledCard>
            {/*<StyledCard>*/}
            {/*    <img alt={"Picture of a desert"} src={card_picture}/>*/}
            {/*    <h2>Headline</h2>*/}
            {/*    <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>*/}
            {/*    <div>*/}
            {/*        <StyledButton>See more</StyledButton>*/}
            {/*        <StyledButton>Save</StyledButton>*/}
            {/*    </div>*/}
            {/*</StyledCard>*/}
            {/*<StyledCard>*/}
            {/*    <img alt={"Picture of a desert"} src={card_picture}/>*/}
            {/*    <h2>Headline</h2>*/}
            {/*    <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>*/}
            {/*    <div>*/}
            {/*        <StyledButton>See more</StyledButton>*/}
            {/*        <StyledButton>Save</StyledButton>*/}
            {/*    </div>*/}
            {/*</StyledCard>*/}
            {/*<StyledCard>*/}
            {/*    <img alt={"Picture of a desert"} src={card_picture}/>*/}
            {/*    <h2>Headline</h2>*/}
            {/*    <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>*/}
            {/*    <div>*/}
            {/*        <StyledButton>See more</StyledButton>*/}
            {/*        <StyledButton>Save</StyledButton>*/}
            {/*    </div>*/}
            {/*</StyledCard>*/}

        </div>
    );
}

export default App;

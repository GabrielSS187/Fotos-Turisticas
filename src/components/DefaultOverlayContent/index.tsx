import React from "react";

// Import Styles
import { 
    Container,
    Heading,
    Buttons,
    ButtonPrimary,
    ButtonSecondary
} from "./styles";
//----------------------------------------------------------------

//Interface
interface Props {
    label: string
    description: string
};
//----------------------------------------------------------------

const DefaultOverlayContent: React.FC<Props> = ({ label, description}) => {

    return (

        <Container>

            <Heading>
                <h1>{ label }</h1>
                <h2>{ description }</h2>
            </Heading>

            <Buttons>
                <ButtonPrimary>Custom Order</ButtonPrimary>
                <ButtonSecondary>Existing Inventory</ButtonSecondary>
            </Buttons>

        </Container>
    );
};

export default DefaultOverlayContent;
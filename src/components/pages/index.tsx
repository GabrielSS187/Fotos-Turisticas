import React from "react";

// Import Components
import DefaultOverlayContent from "../DefaultOverlayContent";
import { ModelsWrapper, ModelSection } from "../../model";
import UniqueOverlay from "../unique-overlay";
//----------------------------------------------------------------

// Import Styles
import {  Container, Space} from "./styles"
//----------------------------------------------------------------

const Page: React.FC = () => {
    
return (

    <Container>

        <ModelsWrapper>
            <div>
                {[
                    "Model one",
                    "Model Two",
                    "Model Three",
                    "Model Four",
                    "Model Five",
                    "Model Six",
                    "Products Model"
                ].map(modelName => (
                    <ModelSection
                    key={modelName}
                    className="colored"
                    modelName={modelName}
                    overLayNode={
                        <DefaultOverlayContent 
                        label={modelName}
                        description="Imagem sem Direito Autoral"
                        />
                    }
                />
            ))}
            </div>

            <Space />

            <UniqueOverlay />
        </ModelsWrapper>

    </Container>

    );
};

export default Page;

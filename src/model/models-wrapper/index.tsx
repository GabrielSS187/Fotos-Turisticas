import React from "react";

// Import Components
import ModelsContext, { CarModel } from "../modelsContext"
//----------------------------------------------------------------

// Import Hooks
import { useRef, useState, useCallback } from "react";
//----------------------------------------------------------------

// Imports Styles
import { Container, OverLaysRoot }  from "./styles";
import ModelOverlay from "../model-overlay"
//----------------------------------------------------------------

const ModelsWrapper: React.FC = ({ children }) => {

    const wrapperRef = useRef<HTMLDivElement>( null );

    const [ registeredModels, setRegisteredModels ] = useState<CarModel[]>([]);

const registerModel = useCallback(( model: CarModel) => {
    setRegisteredModels(state => [...state, model]);
}, []);

const unregisterModel = useCallback(( modelName: string) => {
    setRegisteredModels(state =>
        state.filter( model => model.modelName !== modelName ) 
        );
}, []);

const getModelByName = useCallback(( modelName: string) => {
    return registeredModels.find( item => item.modelName === modelName ) || null ;
    }, 
    [ registeredModels ]
);


    return (

        <ModelsContext.Provider value={{
            wrapperRef,
            registeredModels,
            registerModel,
            unregisterModel,
            getModelByName
        }}
        >
            <Container ref={wrapperRef} >
                <OverLaysRoot>
                  {registeredModels.map(item =>(
                      <ModelOverlay key={item.modelName} 
                      model={item}
                      >
                          {item.overLayNode}
                      </ModelOverlay>
                  ))}
                </OverLaysRoot>
                
                { children }
            </Container>
        </ModelsContext.Provider>

    );
};

export default ModelsWrapper;
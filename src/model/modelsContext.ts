import React, { ReactNode } from "react";

export interface CarModel {
    modelName: string
    overLayNode: ReactNode
    sectionRef: React.RefObject<HTMLElement>
};

interface ModelsContext {
    wrapperRef: React.RefObject<HTMLElement>
    registeredModels: CarModel[]
    registerModel: (model: CarModel) => void
    unregisterModel: (modelName: string) => void
    getModelByName: (modelName: string) => CarModel | null
};

// Exportando Valores
export default React.createContext<ModelsContext>({} as ModelsContext);
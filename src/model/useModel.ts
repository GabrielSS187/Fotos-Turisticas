import { useCallback, useContext, useEffect } from "react";

import ModelsContext from "./modelsContext";

export default function useModel( modelName: string) {
    const { registerModel, unregisterModel, getModelByName } = useContext(
        ModelsContext
    );

    useEffect(() => () => unregisterModel(modelName), [
        modelName,
        unregisterModel
    ]);

    const getModel = useCallback(() => getModelByName(modelName), [
        getModelByName,
        modelName
    ]);

    return { registerModel, getModel };
};
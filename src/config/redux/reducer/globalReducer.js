const initialState = {
    name: 'Ardo'
}

const reducerGlobal =(state = initialState, action) => {
    if (action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: "Sianturi"
        }
    }
    return state;
}

export default reducerGlobal;
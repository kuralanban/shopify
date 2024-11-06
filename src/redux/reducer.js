import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM } from './actions';

const initialState = {
    groceryList: [
        { id: 1, name: 'Milk' },
        { id: 2, name: 'Bread' },
        { id: 3, name: 'Eggs' },
    ]
}

const groceryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                groceryList: [
                    ...state.groceryList,
                    { id: Date.now(), name: action.payload } 
                ]
            }
        case DELETE_ITEM:
            const indexToRemove = state.groceryList.findIndex(item => item.id === action.payload);
            if (indexToRemove !== -1) {
                const newGroceryList = [...state.groceryList];
                newGroceryList.splice(indexToRemove, 1);
                return {
                    ...state,
                    groceryList: newGroceryList,
                };
            }
            return state; 
        case EDIT_ITEM:
            return {
                ...state,
                groceryList: state.groceryList.map(item =>
                    item.id === action.payload.id ? { ...item, name: action.payload.newName } : item
                ),
            };
        default:
            return state;
    }
}

export default groceryReducer;

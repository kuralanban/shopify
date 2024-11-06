export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

export const addItem = (name) => ({
    type: ADD_ITEM,
    payload: name,
});

export const deleteItem = (id) => ({
    type: DELETE_ITEM,
    payload: id,
});

export const editItem = (id, newName) => ({
    type: EDIT_ITEM,
    payload: { id, newName },
});

import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, editItem } from '../../redux/actions';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { useState } from 'react';

const Shoppinglist = () => {
  const [editingItemId, setEditingItemId] = useState(null); 
  const [editedName, setEditedName] = useState(''); 
  const groceryList = useSelector(state => state.groceryList);
  const dispatch = useDispatch();


  const handleEditItem = (id) => {
    if (editedName.trim()) {
      dispatch(editItem(id, editedName)); 
      setEditingItemId(null); 
      setEditedName('');
    }
  };

  const handleCancelEdit = () => {
    setEditingItemId(null); 
    setEditedName(''); 
  };

  return (
    <div className="grocery-list-container">
      <ul className="grocery-list">
        {groceryList.map(item => (
          <li key={item.id} className="grocery-item">
            {editingItemId === item.id ? (
              <div className="edit-item">
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)} // Update the edited name
                  autoFocus
                />
                <button onClick={() => handleEditItem(item.id)}>
                  Save
                </button>
                <button onClick={handleCancelEdit}>
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <span>{item.name}</span>
                <button onClick={() => {
                  setEditingItemId(item.id); 
                  setEditedName(item.name); 
                }}>
                  <FaEdit />
                </button>
                <button onClick={() => dispatch(deleteItem(item.id))}>
                  <FaTrashAlt />
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shoppinglist;

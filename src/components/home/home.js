import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Shoppinglist from "../shopping-list/shopping-list";
import { addItem } from '../../redux/actions';
import '../../index.css';

const Home = () => {
  const [newItem, setNewItem] = useState('');
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (newItem.trim()) {
      dispatch(addItem(newItem));
      setNewItem(''); 
    }
  };

  return (
    <>
      <h1>Grocery List</h1>
      <div className="add-item-container">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      <Shoppinglist />
    </>
  );
};

export default Home;

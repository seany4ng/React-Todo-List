import { useState } from 'react';
import './App.css';

function App() {

  // An example checklist
  const checklist = [
    'Complete React Tutorial',
    'Finish first project',
    'Start looking at production code',
  ]

  // Functions that help with preserving the state of the check boxes
  const [checked, setChecked] = useState([]);

  // Handles the click by changing the boxes checked
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  }

  const isChecked = (item) =>
    checked.includes(item) ? "checked" : "unchecked";
  return (
    <div className="todo-list">
      <div className="list-title">React Todo-List</div>
      <div className="list-container">
        {checklist.map((item, index) =>
          <div key={index}>
            <input value={item} type="checkbox" onChange={handleCheck} />
            <span className={isChecked(item)}>{item}</span>
          </div>)}
      </div>
    </div>
  );
}

export default App
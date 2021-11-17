import { useState } from 'react';
import './AddTask.css'
import Button from './Button';

const AddTask = ({handleTaskAdition}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) =>{
        setInputData(e.target.value)
    }
    const handleTaskClick = () => {
        handleTaskAdition(inputData)
        setInputData('')
    }

    return ( 
        <div className="add-task-container">
        <input 
        onChange={handleInputChange} 
        value={inputData}
        className="add-task-input"
        type="text"
        />
        <div className="add-task-button-container">
            <Button onClick={handleTaskClick}>Adicionar</Button>
        </div>
        
        </div>
     );
}
 
export default AddTask;
import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import TextInput from '../TextInput/TextInput';

const ColumnForm = () => {

    const [title, setValue] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
        setValue('');
        setIcon('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <span className={styles.inputText}>Title:</span>
            <TextInput className={styles.inputStyle} 
            type="text" 
            value={title} 
            onChange={e => setValue(e.target.value)} />
            <span className={styles.inputText}>Icon:</span>
            <TextInput className={styles.inputStyle} 
            type="text" 
            value={icon} 
            onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;
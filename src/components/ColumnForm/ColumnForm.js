import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import { addColumn } from '../../redux/store';

const ColumnForm = (props) => {
    const [title, setValue] = useState('');
    const [icon, setIcon] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId: props.listId }));
        setValue('');
        setIcon('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <span className={styles.inputText}>Title:</span>
            <TextInput className={styles.inputStyle} type="text" value={title} onChange={e => setValue(e.target.value)} />
            <span className={styles.inputText}>Icon:</span>
            <TextInput className={styles.inputStyle} type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;
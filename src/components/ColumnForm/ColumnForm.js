import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';

const ColumnForm = props => {
    const [title, setValue] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setValue('');
        setIcon('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <span className={styles.inputText}>Title:</span><input className={styles.inputStyle} type="text" value={title} onChange={e => setValue(e.target.value)} />
            <span className={styles.inputText}>Icon:</span><input className={styles.inputStyle} type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;
import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button.js';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {

    const [searchString, setSearchString] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(searchString));
        setSearchString('');
    };

    useEffect(() => {
        dispatch(updateSearchString(''));
    }, [dispatch]);

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." type="text" value={searchString} onChange={e => setSearchString(e.target.value)}>...Search</TextInput>
            <Button><span className="fa fa-search" /></Button>
        </form>
    );
};

export default SearchForm;
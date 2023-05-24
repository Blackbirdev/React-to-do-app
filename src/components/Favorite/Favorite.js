import styles from './Favorite.module.scss';
import PageTitle from "../PageTitle/PageTitle";
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCard } from '../../redux/cardsRedux';

const Favorite = () => {

    const favoriteCards = useSelector(getFavoriteCard);

    return (
        <div>
            <PageTitle>favorite cards</PageTitle>
            <div className={styles.container}>
                <ul className={styles.favoriteCards}>
                    {favoriteCards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} />)}
                </ul>
            </div>
        </div>
    )
}

export default Favorite;
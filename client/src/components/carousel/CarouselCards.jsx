import CollectionsFeatured from '../../components/collectionsFeatured/CollectionsFeatured';
import CreatorsFeatured from '../creatorsFeatured/creatorsFeatured';
import RafflesGrid from '../rafflesGrid/RafflesGrid';
import RafflesList from '../rafflesList/RafflesList';
import Blog from '../../components/blog/Blog';
import "./carousel.css";

export default function CarouselCards({ cards, cardtype }) {
    
    if (cardtype == 'collection') {
        return (
            <CollectionsFeatured cards={cards}/> 
        );
    }
    else if (cardtype == 'creator') {
        return (
            <CreatorsFeatured cards={cards}/>
        );
    }
    else if (cardtype == 'raffle') {
        return (
            <RafflesGrid cards={cards}/>
        );
    }
    else if (cardtype == 'blog') {
        return (
            <Blog cards={cards}/>
        );
    }
    else {
        return (
            <div>
                Oops, this is not a valid card
            </div>
        );
    }

 
}
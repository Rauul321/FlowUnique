import react from 'react';
import './ArtistCard.css';



function ArtistCard({artist}) {
    const backgroundStyle = {
        backgroundImage: `url(${artist.image})`,
    };
    return (
        <div className="artist-card">
            <div className="bg-img" style={backgroundStyle}>
                <h3 className="artist-name">{artist.name}</h3>
            </div>

            <button className="see-more-button">
                More info
            </button>
        </div>
    );
}

export default ArtistCard;
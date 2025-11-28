
import react from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import ArtistCard from "../components/ArtistCard.jsx";
import './ArtistsPage.css';
import NVimage from '../assets/NV.jpg';
import NavielImage from '../assets/Naviel.jpg';
import GoneBeatsImage from '../assets/GoneBeats.jpg';
import SergioImage from '../assets/SergioDiaz.jpg';
import { usePageTitle } from '../hooks/usePageTitle.js';

const artists = [
    {
        id: 'a1',
        name: 'Naviel',
        image: NavielImage
    },
    {
        id: 'a2',
        name: 'Gone Beats',
        image: GoneBeatsImage
    },
    {
        id: 'a3',
        name: 'NV',
        image: NVimage
    },
    {
        id: 'a4',
        name: 'Sergio Díaz',
        image: SergioImage // Imagen de ejemplo
    }
    // Añade más artistas según sea necesario
];


function ArtistsPage() {
    usePageTitle("Our Featured Artists - FlowUNIQUE");
    return (
        <>
            <div className="grid-container">
                {/* grid con imágenes de artistas */}
                {artists.map(artist => (
                    <ArtistCard key={artist.id} artist={artist} />
                ))}
            </div>
        </>
    )
}

export default ArtistsPage;
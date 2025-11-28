import ArtistCard from "./ArtistCard.jsx";

// 1. Define el componente (Metadata)
export default {
    title: 'Music/ArtistCard', // Esto define cómo aparece en la barra lateral de Storybook
    component: ArtistCard,
    tags: ['autodocs'], // Crea documentación automática
};

// 2. Define los datos de prueba (Args)
const Template = (args) => <ArtistCard {...args} />;
// 3. Crea la Historia (El estado por defecto)
export const Default = Template.bind({});
Default.args = {
    artist: {
        id: 'a1',
        name: 'The Melodics',
        image: ''
    },
};
// 4. Crea una Segunda Historia (Ej. Artista Famoso)
export const FamousArtist = Template.bind({});
FamousArtist.args = {
    artist: {
        id: 'a2',
        name: 'The Legendary Band',
        image: ''
    },
};
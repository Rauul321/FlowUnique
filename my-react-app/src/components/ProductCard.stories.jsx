// src/components/ProductCard.stories.jsx

import ProductCard from './ProductCard'; // Importa tu componente

// 1. Define el componente (Metadata)
export default {
    title: 'Shop/ProductCard', // Esto define cómo aparece en la barra lateral de Storybook
    component: ProductCard,
    tags: ['autodocs'], // Crea documentación automática
    argTypes: {
        // Aquí puedes definir controles interactivos para tus props
        onAddToCart: { action: 'added to cart' },
    },
};

// 2. Define los datos de prueba (Args)
const Template = (args) => <ProductCard {...args} />;

// 3. Crea la Historia (El estado por defecto)
export const Default = Template.bind({});
Default.args = {
    product: {
        id: 'p1',
        name: 'Camiseta FlowUnique',
        description: 'Camiseta de algodón orgánico con el logo de la empresa.',
        price: 35.00,
        image: '../assets/bottle_design.png'
    },
};

// 4. Crea una Segunda Historia (Ej. Producto Agotado)
export const OutOfStock = Template.bind({});
OutOfStock.args = {
    ...Default.args, // Copia los datos por defecto
    product: {
        ...Default.args.product,
        price: 0, // Precio a 0 o algún indicador visual de agotado
        name: 'Artículo Agotado'
    },
};
import { packagingProducts } from './packaging';
import { organicFertilizerProducts } from './organic_fertilizer';
import { medicalProducts } from './medical';

export const products = [
    ...packagingProducts,
    ...organicFertilizerProducts,
    ...medicalProducts
];

export const getProductBySlug = (slug) => {
    return products.find(p => p.slug === slug);
};

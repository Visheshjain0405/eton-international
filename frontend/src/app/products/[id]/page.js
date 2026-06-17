import ProductDetailClient from "@/components/products/ProductDetailClient";
import { getProductBySlug, products } from "@/data/products";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductBySlug(id);
  if (!product) {
    return {
      title: "Product Not Found | Eteon International",
    };
  }
  return {
    title: `${product.name} | Eteon International`,
    description: product.description || product.desc,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.slug,
  }));
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductBySlug(id);
  return <ProductDetailClient product={product} />;
}

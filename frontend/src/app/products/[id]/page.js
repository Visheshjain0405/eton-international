import ProductDetailClient from "@/components/products/ProductDetailClient";
import api from "@/utils/api";

export async function generateMetadata({ params }) {
  const { id } = await params;
  try {
    const res = await api.get(`/products/slug/${id}`);
    const product = res.data;
    return {
      title: `${product.name} | Eteon International`,
      description: product.description || product.desc,
    };
  } catch (err) {
    return {
      title: "Product Not Found | Eteon International",
    };
  }
}

export async function generateStaticParams() {
  try {
    const res = await api.get("/products");
    return res.data.map((product) => ({
      id: product.slug,
    }));
  } catch (error) {
    console.error("Failed to fetch products for static generation: ", error);
    return [];
  }
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  let product = null;
  try {
    const res = await api.get(`/products/slug/${id}`);
    product = res.data;
  } catch (err) {
    console.error("Failed to load product from database: ", err);
  }

  return <ProductDetailClient product={product} />;
}

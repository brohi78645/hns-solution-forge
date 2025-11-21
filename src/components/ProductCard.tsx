import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { getProductImage } from "@/lib/productImages";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  stock: number;
  is_featured?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const productImage = getProductImage(product.image_url, product.category);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: productImage,
      quantity: 1,
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={productImage}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <CardContent className="p-3 md:p-4">
        <div className="mb-2">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-sm md:text-lg mb-2 line-clamp-2 hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-muted-foreground text-xs md:text-sm line-clamp-2 mb-3 hidden sm:block">
          {product.description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-2">
          <span className="text-xl md:text-2xl font-bold text-accent">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs md:text-sm text-muted-foreground">
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-3 md:p-4 pt-0">
        <Button 
          className="w-full min-h-[44px]" 
          onClick={handleAddToCart}
          disabled={product.stock === 0}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          <span className="text-sm md:text-base">Add to Cart</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

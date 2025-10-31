import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";

const Home = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["featured-products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("is_featured", true)
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
          <p className="text-muted-foreground">
            Explore our top-rated networking and smart device solutions
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-square w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">On orders over $100</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-muted-foreground">24/7 technical assistance</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
              <p className="text-muted-foreground">100% secure transactions</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;

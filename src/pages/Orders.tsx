import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";

const Orders = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUserId(session.user.id);
      }
    });
  }, [navigate]);

  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders", userId],
    queryFn: async () => {
      if (!userId) return [];
      
      const { data, error } = await supabase
        .from("orders")
        .select(`
          *,
          order_items (
            *
          )
        `)
        .eq("user_id", userId)
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!userId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <Skeleton className="h-8 w-64 mb-8" />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-32 w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">My Orders</h1>

        {orders && orders.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground mb-4">You haven't placed any orders yet.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {orders?.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Order #{order.id.slice(0, 8)}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        Placed {formatDistanceToNow(new Date(order.created_at), { addSuffix: true })}
                      </p>
                    </div>
                    <Badge variant={order.status === "completed" ? "default" : "secondary"}>
                      {order.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {order.order_items?.map((item: any) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{item.product_name}</p>
                          <p className="text-sm text-muted-foreground">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <p className="font-medium">${item.product_price}</p>
                      </div>
                    ))}
                    <div className="border-t pt-4 flex justify-between items-center">
                      <span className="font-semibold">Total</span>
                      <span className="text-xl font-bold">${order.total_amount}</span>
                    </div>
                    
                    {order.shipping_address && typeof order.shipping_address === 'object' && (
                      <div className="border-t pt-4">
                        <p className="font-semibold mb-2">Shipping Address</p>
                        <p className="text-sm text-muted-foreground">
                          {(order.shipping_address as any).street}<br />
                          {(order.shipping_address as any).city}, {(order.shipping_address as any).state} {(order.shipping_address as any).zip}<br />
                          {(order.shipping_address as any).country}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;

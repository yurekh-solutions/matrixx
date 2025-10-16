import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Package, Truck, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import SEOHead from "@/components/SEOHead";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user } = useAuth();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Button onClick={() => navigate("/products")}>Back to Products</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      image: product.image,
      brand: product.brand,
      material: product.material,
    });
  };

  const features = [
    { icon: Shield, text: "Quality Assured" },
    { icon: Truck, text: "Fast Delivery" },
    { icon: CheckCircle2, text: "Verified Supplier" },
    { icon: Package, text: "In Stock" },
  ];

  return (
    <>
      <SEOHead
        title={`${product.name} | MaterialMatrix`}
        description={product.description}
      />

      <div className="min-h-screen bg-background pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/products")}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="rounded-2xl overflow-hidden bg-muted h-[400px] lg:h-[500px] flex items-center justify-center">
              <div className="text-[120px] text-primary/20 font-bold">
                {product.category.charAt(0)}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">{product.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <Separator />

              {/* Supplier Info */}
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Supplier Information</h3>
                <div className="space-y-1 text-sm">
                  <p>
                    <span className="text-muted-foreground">Company:</span>{" "}
                    <span className="font-medium">{product.supplier}</span>
                  </p>
                  {product.brand && (
                    <p>
                      <span className="text-muted-foreground">Brand:</span>{" "}
                      <span className="font-medium">{product.brand}</span>
                    </p>
                  )}
                  {product.material && (
                    <p>
                      <span className="text-muted-foreground">Material:</span>{" "}
                      <span className="font-medium">{product.material}</span>
                    </p>
                  )}
                </div>
              </Card>

              {/* Specifications */}
              {product.specifications && (
                <Card className="p-4">
                  <h3 className="font-semibold mb-3">Specifications</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="text-sm">
                        <p className="text-muted-foreground capitalize">{key}</p>
                        <p className="font-medium">{value}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <feature.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full"
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Request for Quotation
                </Button>
                
                {!product.inStock && (
                  <p className="text-sm text-destructive text-center">
                    Currently out of stock
                  </p>
                )}

                <p className="text-xs text-center text-muted-foreground">
                  Login required to request quotation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

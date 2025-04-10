import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (product.linkExternal) {
      e.preventDefault();
      window.open(product.linkUrl, "_blank");
    }
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-xl">
      <CardHeader className="bg-gradient-to-br from-slate-800/90 to-slate-700 p-0 overflow-hidden relative">
        <div className="h-52 overflow-hidden relative flex items-center justify-center">
          {product.logoImage ? (
            <div className="relative z-10 flex items-center justify-center w-full h-full bg-gradient-to-br from-slate-800 to-slate-700">
              <img
                src={product.logoImage}
                alt={product.title}
                className="object-contain h-28 max-w-[240px] transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
              />
            </div>
          ) : (
            <img
              src={product.image}
              alt={product.title}
              className="w-60 h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-grow p-6 pt-8 flex flex-col">
        <CardTitle className="text-2xl font-bold mb-3 text-slate-800">
          {product.title}
        </CardTitle>
        <CardDescription className="text-gray-700 mb-6 leading-relaxed flex-grow text-base">
          {product.description}
        </CardDescription>

        {product.features && product.features.length > 0 && (
          <div className="mt-2 mb-4">
            <h4 className="text-sm font-medium mb-3 text-gray-700">
              Key Features
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.features.map((feature, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="bg-gray-50/80 text-gray-700 border-gray-200 py-1.5 px-3 hover:bg-gray-100 transition-colors"
                >
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link
          href={product.linkUrl || "#"}
          onClick={handleClick}
          className="w-full"
        >
          <Button
            variant="default"
            className="w-full group bg-slate-800 hover:bg-primary transition-all duration-300 shadow-md"
          >
            <span>Explore {product.title}</span>
            {product.linkExternal ? (
              <ExternalLink
                size={16}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            ) : (
              <ArrowRight
                size={16}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            )}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

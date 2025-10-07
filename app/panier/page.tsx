"use client";

import { useCartStore } from "@/lib/store";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PanierPage() {
  const { items, updateQuantity, removeItem, clearCart, getTotalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link href="/" className="flex items-center gap-2">
                <Flame className="h-7 w-7 text-black" strokeWidth={1.5} />
                <span className="text-2xl font-light tracking-wider text-black">
                  PIZZERIA <span className="font-medium">FUOCO</span>
                </span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Empty Cart */}
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="h-24 w-24 text-neutral-300 mx-auto mb-8" strokeWidth={1} />
            <h1 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
              Votre panier est vide
            </h1>
            <p className="text-lg text-neutral-600 font-light mb-8">
              Découvrez nos délicieuses pizzas napolitaines
            </p>
            <Link href="/#menu">
              <Button size="lg" className="bg-black hover:bg-red-600 text-white text-sm tracking-wider uppercase px-8 cursor-pointer">
                Voir le menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const totalPrice = getTotalPrice();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-2">
              <Flame className="h-7 w-7 text-black" strokeWidth={1.5} />
              <span className="text-2xl font-light tracking-wider text-black">
                PIZZERIA <span className="font-medium">FUOCO</span>
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Cart Content */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block px-4 py-1.5 border border-black mb-6">
              <span className="text-black text-xs font-light tracking-widest uppercase">
                Votre Commande
              </span>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-4xl md:text-5xl font-light text-black tracking-tight">
                Panier
              </h1>
              <Button
                variant="outline"
                size="sm"
                onClick={clearCart}
                className="text-neutral-600 hover:text-black border-neutral-300"
              >
                Vider le panier
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.name} className="bg-white border-neutral-200 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex gap-4">
                      {/* Image */}
                      <div className="relative w-32 h-32 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover grayscale"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 py-4 pr-4 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-medium text-black tracking-wide">
                              {item.name}
                            </h3>
                            <Button
                              variant="ghost"
                              size="icon-sm"
                              onClick={() => removeItem(item.name)}
                              className="text-neutral-500 hover:text-black"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-sm text-neutral-600 font-light mb-3">
                            {item.desc}
                          </p>
                        </div>

                        {/* Quantity and Price */}
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon-sm"
                              onClick={() => updateQuantity(item.name, item.quantity - 1)}
                              className="h-8 w-8 border-neutral-300"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon-sm"
                              onClick={() => updateQuantity(item.name, item.quantity + 1)}
                              className="h-8 w-8 border-neutral-300"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <span className="text-lg font-light text-black">
                            {(parseFloat(item.price.replace('€', '')) * item.quantity).toFixed(2)}€
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-neutral-50 border-neutral-200 sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-medium text-black mb-6 tracking-wide">
                    Récapitulatif
                  </h2>

                  <div className="space-y-3 mb-6 pb-6 border-b border-neutral-200">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600 font-light">Sous-total</span>
                      <span className="text-black font-light">{totalPrice.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600 font-light">Livraison</span>
                      <span className="text-black font-light">Gratuite</span>
                    </div>
                  </div>

                  <div className="flex justify-between mb-6">
                    <span className="text-lg font-medium text-black">Total</span>
                    <span className="text-2xl font-light text-black">{totalPrice.toFixed(2)}€</span>
                  </div>

                  <Button className="w-full bg-black hover:bg-red-600 text-white text-xs tracking-widest uppercase mb-3">
                    Commander
                  </Button>

                  <Link href="/#menu">
                    <Button
                      variant="outline"
                      className="w-full border-neutral-300 text-neutral-700 hover:text-black text-xs tracking-widest uppercase"
                    >
                      Continuer mes achats
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

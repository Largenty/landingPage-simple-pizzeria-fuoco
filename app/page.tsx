"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Flame,
    Pizza,
    Clock,
    MapPin,
    Phone,
    Mail,
    ShoppingCart,
    Menu,
    X,
    Minus,
    Plus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/lib/store";
import { useState } from "react";

export default function Home() {
    const { addItem, getTotalItems, items, updateQuantity } = useCartStore();
    const totalItems = getTotalItems();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const pizzas = [
        {
            name: "Margherita Suprema",
            desc: "Sauce tomate San Marzano, mozzarella di bufala, basilic frais",
            price: "14€",
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
        },
        {
            name: "Diavola Inferno",
            desc: "Sauce tomate épicée, mozzarella, salami piquant, piment calabrais",
            price: "16€",
            image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80",
        },
        {
            name: "Quattro Formaggi",
            desc: "Mozzarella, gorgonzola, parmesan, chèvre, crème fraîche",
            price: "17€",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
        },
        {
            name: "Prosciutto e Funghi",
            desc: "Jambon de Parme DOP, champignons frais, mozzarella, roquette",
            price: "18€",
            image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80",
        },
        {
            name: "Truffe Noire",
            desc: "Crème de truffe, mozzarella burrata, parmesan, huile de truffe",
            price: "24€",
            image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=800&q=80",
        },
        {
            name: "Vegetariana Deluxe",
            desc: "Légumes grillés, aubergine, courgette, poivrons, olives",
            price: "15€",
            image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=800&q=80",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20 max-w-7xl mx-auto">
                        <div className="flex items-center gap-2">
                            <Flame
                                className="h-7 w-7 text-black"
                                strokeWidth={1.5}
                            />
                            <span className="text-2xl font-light tracking-wider text-black">
                                PIZZERIA{" "}
                                <span className="font-medium">FUOCO</span>
                            </span>
                        </div>
                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-12">
                            <a
                                href="#menu"
                                className="text-neutral-700 hover:text-black transition-colors text-sm tracking-wide uppercase"
                            >
                                Menu
                            </a>
                            <a
                                href="#about"
                                className="text-neutral-700 hover:text-black transition-colors text-sm tracking-wide uppercase"
                            >
                                À propos
                            </a>
                            <a
                                href="#contact"
                                className="text-neutral-700 hover:text-black transition-colors text-sm tracking-wide uppercase"
                            >
                                Contact
                            </a>
                            <Link href="/panier">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-none bg-white relative border-black hover:border-red-600 text-black hover:bg-red-600 hover:text-white"
                                >
                                    <ShoppingCart className="h-4 w-4" />
                                    {totalItems > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                            {totalItems}
                                        </span>
                                    )}
                                </Button>
                            </Link>
                            <Button className="rounded-none hover:bg-red-600 bg-black text-white text-sm tracking-wide uppercase px-6 cursor-pointer">
                                Réserver
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden items-center gap-3">
                            {totalItems > 0 && (
                                <span className="absolute top-3 right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() =>
                                    setMobileMenuOpen(!mobileMenuOpen)
                                }
                                className="rounded-none border-black hover:bg-black hover:text-white"
                            >
                                {mobileMenuOpen ? (
                                    <X className="h-5 w-5" />
                                ) : (
                                    <Menu className="h-5 w-5" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-neutral-200 bg-white w-full">
                        <div className="px-4 sm:px-6 py-6 space-y-4 max-w-7xl mx-auto">
                            <a
                                href="#menu"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-neutral-700 hover:text-black transition-colors text-sm tracking-wide uppercase py-2"
                            >
                                Menu
                            </a>
                            <a
                                href="#about"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-neutral-700 hover:text-black transition-colors text-sm tracking-wide uppercase py-2"
                            >
                                À propos
                            </a>
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-neutral-700 hover:text-black transition-colors text-sm tracking-wide uppercase py-2"
                            >
                                Contact
                            </a>
                            <Link
                                href="/panier"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <div className="flex items-center justify-between py-2 text-neutral-700 hover:text-black transition-colors text-sm tracking-wide uppercase">
                                    <span>Panier</span>
                                    {totalItems > 0 && (
                                        <span className="bg-black text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                                            {totalItems}
                                        </span>
                                    )}
                                </div>
                            </Link>
                            <Button
                                className="w-full rounded-none hover:bg-red-600 bg-black text-white text-sm tracking-wide uppercase px-6 cursor-pointer"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Réserver
                            </Button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* Left Content */}
                        <div className="px-8 sm:px-12 lg:px-16 py-20 lg:py-32 flex flex-col justify-center">
                            <div className="inline-block px-4 py-1.5 border border-black mb-8">
                                <span className="text-black text-xs font-light tracking-widest uppercase">
                                    Napoli dal 1950
                                </span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-light leading-none mb-8 tracking-tight">
                                <span className="text-black">L&apos;Arte</span>
                                <br />
                                <span className="text-black font-medium">
                                    Napoletana
                                </span>
                            </h1>
                            <p className="text-lg text-neutral-600 leading-relaxed mb-12 max-w-md font-light">
                                L&apos;authenticité d&apos;une tradition
                                séculaire. Chaque pizza est façonnée à la main
                                et cuite au feu de bois selon les règles
                                strictes de l&apos;école napolitaine.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-12">
                                <Button
                                    size="lg"
                                    className="rounded-none bg-black hover:bg-red-600 text-white text-sm tracking-wider uppercase px-8"
                                >
                                    Commander
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-none border-black text-black hover:bg-black hover:text-white text-sm tracking-wider uppercase px-8"
                                >
                                    Découvrir
                                </Button>
                            </div>
                            <div className="flex gap-12 pt-4 border-t border-neutral-200">
                                <div className="flex items-center gap-3">
                                    <Clock
                                        className="h-4 w-4 text-black"
                                        strokeWidth={1.5}
                                    />
                                    <span className="text-neutral-700 text-sm font-light">
                                        90 secondes
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Flame
                                        className="h-4 w-4 text-black"
                                        strokeWidth={1.5}
                                    />
                                    <span className="text-neutral-700 text-sm font-light">
                                        485°C
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Pizza
                                        className="h-4 w-4 text-black"
                                        strokeWidth={1.5}
                                    />
                                    <span className="text-neutral-700 text-sm font-light">
                                        Tradition
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Images Grid */}
                        <div className="grid grid-cols-2 gap-0 h-[600px] lg:h-auto">
                            <div className="relative overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
                                    alt="Pizza artisanale"
                                    fill
                                    className="object-cover grayscale interactive-img"
                                />
                            </div>
                            <div className="relative overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"
                                    alt="Four à bois"
                                    fill
                                    className="object-cover grayscale interactive-img"
                                />
                            </div>
                            <div className="relative overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80"
                                    alt="Pizza Margherita"
                                    fill
                                    className="object-cover grayscale interactive-img"
                                />
                            </div>
                            <div className="relative overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=800&q=80"
                                    alt="Ingrédients frais"
                                    fill
                                    className="object-cover grayscale interactive-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Section */}
            <section
                id="menu"
                className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-block px-4 py-1.5 border border-black mb-6">
                            <span className="text-black text-xs font-light tracking-widest uppercase">
                                Le Menu
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
                            Nos Classiques
                        </h2>
                        <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
                            Chaque recette respecte la tradition napolitaine,
                            avec une pâte fermentée 48h et des ingrédients
                            d&apos;exception
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {pizzas.map((pizza, index) => (
                            <Card
                                key={index}
                                className="rounded-none bg-white border-neutral-200 hover:border-black transition-all duration-500 group overflow-hidden"
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src={pizza.image}
                                        alt={pizza.name}
                                        fill
                                        className="object-cover grayscale interactive-img"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-medium text-black tracking-wide">
                                            {pizza.name}
                                        </h3>
                                        <span className="text-xl font-light text-black">
                                            {pizza.price}
                                        </span>
                                    </div>
                                    <p className="text-neutral-600 mb-6 font-light text-sm leading-relaxed">
                                        {pizza.desc}
                                    </p>
                                    {(() => {
                                        const existing = items.find(
                                            (i) => i.name === pizza.name
                                        );
                                        if (!existing) {
                                            return (
                                                <Button
                                                    onClick={() =>
                                                        addItem(pizza)
                                                    }
                                                    className="w-full bg-black hover:bg-red-600 text-white text-xs tracking-widest uppercase"
                                                >
                                                    Ajouter au panier
                                                </Button>
                                            );
                                        }
                                        return (
                                            <div className="flex justify-between items-center w-full">
                                                <div className="flex items-center w-full gap-8">
                                                    <Button
                                                        variant="outline"
                                                        size="icon-sm"
                                                        onClick={() =>
                                                            updateQuantity(
                                                                pizza.name,
                                                                existing.quantity -
                                                                    1
                                                            )
                                                        }
                                                        className="h-8 w-8 border-neutral-300 rounded-none w-1/3"
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </Button>
                                                    <span className="w-8 text-center text-sm font-medium w-full">
                                                        {existing.quantity}
                                                    </span>
                                                    <Button
                                                        variant="outline"
                                                        size="icon-sm"
                                                        onClick={() =>
                                                            updateQuantity(
                                                                pizza.name,
                                                                existing.quantity +
                                                                    1
                                                            )
                                                        }
                                                        className="h-8 w-8 border-neutral-300 rounded-none w-1/3"
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                            </div>
                                        );
                                    })()}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-block px-4 py-1.5 border border-black mb-6">
                            <span className="text-black text-xs font-light tracking-widest uppercase">
                                Notre Savoir-Faire
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-light text-black tracking-tight">
                            L&apos;Excellence
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Flame,
                                title: "Four à Bois",
                                desc: "Four Acunto importé de Naples. Cuisson à 485°C pendant 90 secondes pour une croûte léopardée parfaite.",
                            },
                            {
                                icon: Pizza,
                                title: "Ingrédients DOP",
                                desc: "Tomates San Marzano, mozzarella di bufala Campana, huile d'olive extra vierge. Authenticité garantie.",
                            },
                            {
                                icon: Clock,
                                title: "Fermentation Lente",
                                desc: "Pâte préparée quotidiennement, fermentation de 48h minimum. Légère, digeste et savoureuse.",
                            },
                        ].map((feature, index) => (
                            <div key={index} className="text-center group">
                                <div className="inline-flex items-center justify-center w-20 h-20 border border-black mb-8 group-hover:bg-black transition-colors duration-300">
                                    <feature.icon
                                        className="h-8 w-8 text-black group-hover:text-white transition-colors cursor-pointer"
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <h3 className="text-2xl font-light text-black mb-4 tracking-wide">
                                    {feature.title}
                                </h3>
                                <p className="text-neutral-600 font-light leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50"
            >
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 border border-black mb-6">
                            <span className="text-black text-xs font-light tracking-widest uppercase">
                                Contact
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
                            Venez Nous Voir
                        </h2>
                        <p className="text-lg text-neutral-600 font-light">
                            Ouvert du mardi au dimanche, midi et soir
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12 mb-16">
                        <div className="flex flex-col items-center text-center">
                            <div className="inline-flex items-center justify-center w-14 h-14 border border-black mb-4">
                                <MapPin
                                    className="h-5 w-5 text-black"
                                    strokeWidth={1.5}
                                />
                            </div>
                            <h3 className="text-sm font-medium text-black mb-2 tracking-widest uppercase">
                                Adresse
                            </h3>
                            <p className="text-neutral-600 font-light text-sm">
                                Place de la mairie
                                <br />
                                84830 Sérignan-du-comtat
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="inline-flex items-center justify-center w-14 h-14 border border-black mb-4">
                                <Phone
                                    className="h-5 w-5 text-black"
                                    strokeWidth={1.5}
                                />
                            </div>
                            <h3 className="text-sm font-medium text-black mb-2 tracking-widest uppercase">
                                Téléphone
                            </h3>
                            <p className="text-neutral-600 font-light text-sm">
                                +33 6 85 49 53 76
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="inline-flex items-center justify-center w-14 h-14 border border-black mb-4">
                                <Mail
                                    className="h-5 w-5 text-black"
                                    strokeWidth={1.5}
                                />
                            </div>
                            <h3 className="text-sm font-medium text-black mb-2 tracking-widest uppercase">
                                Email
                            </h3>
                            <p className="text-neutral-600 font-light text-sm">
                                Largenty@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <Button
                            size="lg"
                            className="bg-black hover:bg-red-600 text-white text-sm tracking-widest uppercase px-12"
                        >
                            Réserver une table
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-neutral-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Flame
                                className="h-6 w-6 text-black"
                                strokeWidth={1.5}
                            />
                            <span className="text-lg font-light tracking-wider text-black">
                                PIZZERIA{" "}
                                <span className="font-medium">FUOCO</span>
                            </span>
                        </div>
                        <p className="text-neutral-600 text-center text-sm font-light">
                            © 2025 Ludovic ARGENTY. Tous droits réservés.
                        </p>
                        <div className="flex gap-8">
                            <a
                                href="#"
                                className="text-neutral-600 hover:text-black transition-colors text-sm tracking-wide uppercase"
                            >
                                Instagram
                            </a>
                            <a
                                href="#"
                                className="text-neutral-600 hover:text-black transition-colors text-sm tracking-wide uppercase"
                            >
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

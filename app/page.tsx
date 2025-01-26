import MainNavigation from "../components/Navigation";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "My Main CC ",
    description:
      "This CC will instantly elevate your videos to stunning 4K quality, and a cinematic finish. Transform ordinary footage into professional masterpieces with just one click!.",
    price: "599",
    images: [
      "/images/main-cc-1.webp"
    ],
    requirements: ["After Effects", "Magic Bullet Looks", "BCC", "Sapphire"],
  },
  {
    id: 2,
    name: "My Topaz Settings ",
    description:
      "Effortlessly enhance your videos! These Topaz settings upscale low-quality footage to stunning 4K, delivering sharp, clear, and professional results every time.",
    price: "700",
    images: [
      "/images/topaz-settings-16-9.webp"
    ],
    requirements: ["After Effects", "Element 3D", "Particular"],
  },
  {
    id: 3,
    name: "My Export Settings",
    description:
      "Say goodbye to quality loss! These export settings are optimized to preserve detail in your videos, ensuring that your edits look as orginal—without any compression ",
    price: "200",
    images: [
      "/images/export-settings-16-9.webp",
    ],
    requirements: ["DaVinci Resolve", "LUTs Package"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <MainNavigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-accent">
          My Products
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="glass-card overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-secondary mb-4">{product.description}</p>
                <p className="text-2xl font-bold text-accent mb-4">
                  ₹{product.price}
                </p>
                <Link href={`/product/${product.id}`} passHref>
                  <button className="neomorphic-button w-full py-2 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

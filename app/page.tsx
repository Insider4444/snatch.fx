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
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330205272857120778/cc_main_00000.png?ex=678d21b3&is=678bd033&hm=3bd3bccccb0db80e56ecbb420bf3ee909a88751d70bbde06631eb988cf377ceb&",
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330205273306038313/MAIN_CC.png?ex=678d21b3&is=678bd033&hm=30414133bb592a9d46959cfd3ec186b7978ecb31e87239a6f8b88418de79932e&",
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
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330223861077114931/lll_00001.jpg?ex=678d3302&is=678be182&hm=79ec048a6102f485f4465c8f87283a2cfabac3592c2b460dafa7c0408f544ea9&",
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330221498832781373/wiouth_ropax_00000.jpg?ex=678d30cf&is=678bdf4f&hm=e709d2934d6efab114649bd920bf1588ee5465878be40082875ba18d31638c3d&",
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330219463102169221/22_00001.jpg?ex=678d2eea&is=678bdd6a&hm=12f1372025a46604e8cafa4db229f775d57d1bdf99c86bafec9277ff5c886d34&",
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
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330242317495304313/Untitled-1.jpg?ex=678d4433&is=678bf2b3&hm=b28b719ccaff56d26330f9ac1786e0bd5a824ea9ca9a99525b43303766651b5a&",
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330242317013225543/Untitled-2.jpg?ex=678d4433&is=678bf2b3&hm=dd29cf1f4d6ce18d25914887a199802bf2a4b60f7234098c02fd54850a18015a&",
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

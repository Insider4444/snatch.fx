import { notFound } from "next/navigation";
import Link from "next/link";
import MainNavigation from "../../../components/Navigation"; // Ensure this path is correct
import ImageSlider from "../../../components/ImageSlider";
import PaymentButton from "../../../components/PaymentButton";
import { Info } from "lucide-react";

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
    qrCodePath:
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330231496098971778/599.webp?ex=678d3a1f&is=678be89f&hm=8c4229af4613382f113db0642c94ba1b7a42518acc8875d68ede05bca271c50a&",
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
    requirements: ["After Effects", "Topaz Software"],
    qrCodePath:
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330231847954939944/topaz.webp?ex=678d3a73&is=678be8f3&hm=6867e84c3c04c0f21657a52012813bf50604d6382023f3835407c74b30ba453d&",
  },
  {
    id: 3,
    name: "My Export Settings",
    description:
      "Say goodbye to quality loss! These export settings are optimized to preserve detail in your videos, ensuring that your edits look as orginal—without any compression ",
    price: "200",
    images: [
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330242317013225543/Untitled-2.jpg?ex=678d4433&is=678bf2b3&hm=dd29cf1f4d6ce18d25914887a199802bf2a4b60f7234098c02fd54850a18015a&",
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330242317495304313/Untitled-1.jpg?ex=678d4433&is=678bf2b3&hm=b28b719ccaff56d26330f9ac1786e0bd5a824ea9ca9a99525b43303766651b5a&",
    ],
    requirements: ["Media Encoder"],
    qrCodePath:
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330232750845726770/200.webp?ex=678d3b4a&is=678be9ca&hm=b6750cea86874e64706bc1c32b0b86a9c5e8727640115e5996bb6b6f689a06af&",
  },
];

// Correcting type for the params prop
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params; // Resolve the Promise
  const product = products.find((p) => p.id === parseInt(resolvedParams.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <MainNavigation />
      <main className="container mx-auto px-4 py-8">
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-accent">
            {product.name}
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <ImageSlider images={product.images} />

            <div className="space-y-6">
              <p className="text-lg text-secondary">{product.description}</p>
              <p className="text-3xl font-bold text-accent">₹{product.price}</p>

              <div>
                <h2 className="text-xl font-semibold mb-2">Requirements:</h2>
                <ul className="list-disc list-inside text-secondary">
                  {product.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <PaymentButton
                amount={product.price}
                productName={product.name}
                qrCodePath={product.qrCodePath}
              />

              <div className="neomorphic-box p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Info className="text-accent mr-2" />
                  <h3 className="text-lg font-semibold">
                    Payment Instructions
                  </h3>
                </div>
                <p className="text-sm text-secondary">
                  After completing the payment, please take a screenshot of the
                  payment confirmation and
                  <Link
                    href="/contact"
                    className="text-accent hover:underline font-bold emphasized-link"
                  >
                    send it to me
                  </Link>
                  . Once I verify it, I will provide you with the download link
                  for the item you purchased (e.g., CC presets, Topaz presets,
                  etc.).
                </p>
              </div>

              <div className="mt-4 text-sm text-secondary md:hidden">
                <p>
                  Click the &quot;Pay&quot; button above to make the payment
                  using your preferred UPI app.
                </p>
              </div>

              <div className="mt-4 text-sm text-secondary hidden md:block">
                <p>
                  Click the &quot;Pay&quot; button above to reveal the QR code.
                  Scan it with any UPI app on your mobile device to complete the
                  payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

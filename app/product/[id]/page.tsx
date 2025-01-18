import { notFound } from "next/navigation";
import Link from "next/link";
import MainNavigation from "../../../components/Navigation";
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
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330205272857120778/cc_main_00000.png",
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330205273306038313/MAIN_CC.png",
    ],
    requirements: ["After Effects", "Magic Bullet Looks", "BCC", "Sapphire"],
    qrCodePath:
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330231496098971778/599.webp",
  },
  {
    id: 2,
    name: "My Topaz Settings ",
    description:
      "Effortlessly enhance your videos! These Topaz settings upscale low-quality footage to stunning 4K, delivering sharp, clear, and professional results every time.",
    price: "700",
    images: [
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330223861077114931/lll_00001.jpg",
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330221498832781373/wiouth_ropax_00000.jpg",
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330219463102169221/22_00001.jpg",
    ],
    requirements: ["After Effects", "Topaz Software"],
    qrCodePath:
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330231847954939944/topaz.webp",
  },
  {
    id: 3,
    name: "My Export Settings",
    description:
      "Say goodbye to quality loss! These export settings are optimized to preserve detail in your videos, ensuring that your edits look as original—without any compression ",
    price: "200",
    images: [
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330242317013225543/Untitled-2.jpg",
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330242317495304313/Untitled-1.jpg",
    ],
    requirements: ["Media Encoder"],
    qrCodePath:
      "https://cdn.discordapp.com/attachments/1329465113404772405/1330232750845726770/200.webp",
  },
];

// Correcting type for the params prop
interface PageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = products.find((p) => p.id === parseInt(params.id));

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

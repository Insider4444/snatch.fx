import MainNavigation from "../../components/Navigation";
import Logo from "../../components/Logo";
import { Instagram, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <MainNavigation />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto glass-card p-8">
          <div className="flex justify-center mb-8">
            <Logo className="text-4xl" />
          </div>
          <h1 className="text-3xl font-bold text-center mb-8 text-accent">
            Contact Us
          </h1>
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <Instagram className="text-pink-500" size={24} />
              <a
                href="https://www.instagram.com/snatch.fx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-accent transition-colors"
              >
                @snatch.fx
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Mail className="text-blue-500" size={24} />
              <a
                href="mailto:peternikhil988@gmail.com"
                className="text-lg hover:text-accent transition-colors"
              >
                peternikhil988@gmail.com
              </a>
            </div>
          </div>
          <p className="mt-12 text-center text-secondary">
            We'd love to hear from you! Reach out to us on Instagram or via
            email for any inquiries or support.
          </p>
        </div>
      </main>
    </div>
  );
}

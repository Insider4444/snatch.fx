import Image from 'next/image'

interface LogoProps {
  className?: string
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/468021976_1257946828737736_5425093873213144242_n.jpg-CwF6H5WQyygApnDZc7Fb3zQgoEUB5h.jpeg"
        alt="snatch.fx logo"
        width={40}
        height={40}
        className="rounded-full mr-2"
      />
      <span className="text-2xl font-bold text-red-500">snatch.fx</span>
    </div>
  )
}


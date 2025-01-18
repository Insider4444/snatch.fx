import Navigation from '../components/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      {/* rest of code here */}
    </>
  )
}


// app/product/[id]/page.tsx
import Navigation from '../../../components/Navigation'

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Navigation />
      {/* rest of code here */}
      <h1>Product {params.id}</h1>
    </>
  )
}

// app/about/page.tsx
import Navigation from '../components/Navigation'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      {/* rest of code here */}
      <h1>About Us</h1>
    </>
  )
}


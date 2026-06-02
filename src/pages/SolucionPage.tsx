import Solution from '../components/Solution'
import WhyUs from '../components/WhyUs'
import Footer from '../components/Footer'

const SolucionPage = () => (
  <div className="bg-black [&>section:first-child]:pt-14 [&>section:first-child]:sm:pt-16 [&>section:first-child]:lg:pt-20">
    <Solution />
    <WhyUs />
    <Footer />
  </div>
)

export default SolucionPage

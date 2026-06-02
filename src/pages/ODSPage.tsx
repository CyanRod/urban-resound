import ODS from '../components/ODS'
import Cooperation from '../components/Cooperation'
import Vision from '../components/Vision'
import Footer from '../components/Footer'

const ODSPage = () => (
  <div className="bg-black [&>section:first-child]:pt-14 [&>section:first-child]:sm:pt-16 [&>section:first-child]:lg:pt-20">
    <ODS />
    <Cooperation />
    <Vision />
    <Footer />
  </div>
)

export default ODSPage

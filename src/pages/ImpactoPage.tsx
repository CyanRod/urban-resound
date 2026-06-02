import WomenImpact from '../components/WomenImpact'
import Community from '../components/Community'
import Education from '../components/Education'
import ImpactTable from '../components/ImpactTable'
import B2B from '../components/B2B'
import Scaling from '../components/Scaling'
import Reinvestment from '../components/Reinvestment'
import FutureLines from '../components/FutureLines'
import Competition from '../components/Competition'
import Environmental from '../components/Environmental'
import Footer from '../components/Footer'

const ImpactoPage = () => (
  <div className="bg-black [&>section:first-child]:pt-14 [&>section:first-child]:sm:pt-16 [&>section:first-child]:lg:pt-20">
    <WomenImpact />
    <Community />
    <Education />
    <ImpactTable />
    <B2B />
    <Scaling />
    <Reinvestment />
    <FutureLines />
    <Competition />
    <Environmental />
    <Footer />
  </div>
)

export default ImpactoPage

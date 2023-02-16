import FeaturedRecipes from "../components/FeaturedRecipes";
import PageBanner from "../components/PageBanner";
import Services from "../components/Services";
import Contact from "../components/Contact";

function HomePage() {
  return (
    <main>
      <PageBanner />
      <FeaturedRecipes />
      <Services />
      <Contact />
    </main>
  )
}

export default HomePage

import Hero from "../components/Hero";
import FavCard from '../components/FavCard'

export default function Favourites() {
  return (
    <div>
      <div className="text-center py-5">
      <Hero loggedIn={true} />
      <h3>@Username&apos;s Favourites</h3>
      <FavCard />
      </div>
    </div>
  )
}

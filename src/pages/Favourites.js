import Hero from "../components/Hero";
import FavCard from '../components/FavCard'

export default function Favourites() {
  return (
    <div>
      <div className="text-center pt-5">
      <Hero loggedIn={true} />
      <h3>@Username's Favourites</h3>
      <FavCard />
      </div>
    </div>
  )
}

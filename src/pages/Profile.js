import Hero from "../components/Hero";
import ProfileImage from "../assets/profile.png";
import Button from "../components/buttons/Button";

export default function Profile() {
  return (
    <div className="container pt-5">
      <Hero loggedIn={true} />
      <div className="text-center mt-5 mb-3">
        <img src={ProfileImage} style={{width: "80px"}}/>
        <p>Upload Image</p>
      </div>
      <div className="container table-responsive-sm">
        <table className="table table-hover">
          <tbody>
            <tr>
              <th scope="row" className="pt-5">Name</th>
              <td className="pt-5">FirstName LastName</td>
            </tr>
            <tr>
              <th scope="row" className="pt-4">Email</th>
              <td className="pt-4">email@email.com</td>
            </tr>
            <tr>
              <th scope="row" className="pt-4">Age</th>
              <td className="pt-4">00</td>
            </tr>
            <tr>
              <th scope="row" className="pt-4">Registration</th>
              <td className="pt-4">MW45 KLO</td>
            </tr>
            </tbody>
        </table>
      </div>
      <div className="text-center pt-4">
        <Button title="Edit Profile" />
      </div>  
    </div>  
  )   
}
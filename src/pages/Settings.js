import Hero from "../components/Hero";
// import ProfileImage from "../assets/profile.png";
import { AiOutlineRight as ClickIcon } from "react-icons/ai";
import { 
  BsFillEyeFill as AppearanceIcon, 
  BsLock as PrivacyIcon,
  BsHeadphones as HelpIcon,
  BsQuestionCircle as AboutIcon,
} from "react-icons/bs"

export default function Settings() {
    return (
      <div className="container pl-3 pt-5">
        <Hero loggedIn={true} />
        <h2>Settings</h2>
        <h5>Account</h5>
        <div className="text-center mt-4 mb-3">
          {/* <img src={ProfileImage} style={{width: "44px"}}/> */}
        </div>
        <div>
        <div className="container table-responsive">
          <table className="table table-hover">
            <tbody>
              <tr>
                <th scope="row" className="pt-5"><AppearanceIcon />&nbsp;&nbsp;Appearance</th>
                <td className="pt-5"><ClickIcon /></td>
              </tr>
              <tr>
                <th scope="row" className="pt-4"><PrivacyIcon />&nbsp;&nbsp;Privacy &#38; Security</th>
                <td className="pt-4"><ClickIcon /></td>
              </tr>
              <tr>
                <th scope="row" className="pt-4"><HelpIcon />&nbsp;&nbsp;Help &#38; Support</th>
                <td className="pt-4"><ClickIcon /></td>
              </tr>
              <tr>
                <th scope="row" className="pt-4"><AboutIcon />&nbsp;&nbsp;About</th>
                <td className="pt-4"><ClickIcon /></td>
              </tr>
              </tbody>
          </table>
        </div>
        </div>

      </div>  
    )   
  }

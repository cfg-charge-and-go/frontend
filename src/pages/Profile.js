import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import Hero from "../components/Hero";
import ProfileImage from "../assets/profile.png";
import Button from "../components/buttons/Button";

export default function Profile() {
  /* eslint-disable no-unused-vars */
  const [cookies, setCookie, removeCookie] = useCookies(['userId'])
  const [userInfo, setUserInfo] = useState()
  const userId = cookies['userId']

  useEffect(function() {
    fetch(`http://127.0.0.1:4000/user/${userId}`)
      .then(response => response.json())
      .then(setUserInfo)
  }, [])

  return (
    <div className="container py-5">
      <Hero loggedIn={true} />
      <div className="text-center mt-5 mb-3">
        <img src={ProfileImage} style={{width: "80px"}}/>
        <p>Upload Image</p>
      </div>
      {userInfo &&
        <div className="container table-responsive-sm">
          <table className="table table-hover">
            <tbody>
              <tr>
                <th scope="row" className="pt-5">Name</th>
                <td className="pt-5">{userInfo.user.name}</td>
              </tr>
              <tr>
                <th scope="row" className="pt-4">Email</th>
                <td className="pt-4">{userInfo.user.email}</td>
              </tr>
              <tr>
                <th scope="row" className="pt-4">Date of birth</th>
                <td className="pt-4">{userInfo.user.date_of_birth}</td>
              </tr>
              <tr>
                <th scope="row" className="pt-4">Vehicle registration</th>
                <td className="pt-4">{userInfo.vehicle?.registrationNumber}</td>
              </tr>
              <tr>
                <th scope="row" className="pt-4">Vehicle make</th>
                <td className="pt-4">{userInfo.vehicle?.make}</td>
              </tr>
              <tr>
                <th scope="row" className="pt-4">Vehicle colour</th>
                <td className="pt-4">{userInfo.vehicle?.colour}</td>
              </tr>
              </tbody>
          </table>
        </div>
      }
      <div className="text-center pt-4">
        <Button title="Edit Profile" />
      </div>
    </div>  
  )
}
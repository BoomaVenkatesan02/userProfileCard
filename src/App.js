import React from "react";
import "./index.css";


const UserProfileCard = ({items}) =>
{
  return(
    <div className="profile-card">
      <div className="banner"></div>
      <img src={items.imageUrl} alt="profile" className="profileImage" style={{width:items.imageSize}}></img>
      <h3>{items.name}</h3>
      <p>{items.email}</p>
      <p>{items.address}</p>
      <button value="" className="followBtn">Follow</button>
    </div>
   );
};

function App() {
   const userInfo = [
    {
      id: 1,
      name: "Merta",
      email: "merata@gmail.com",
      address: "#11, Fisher Road, Columbous, USA - 78076.",
      imageUrl: "./images/profile_image.jpg",
      imageSize: 100,
    },
    {
      id: 2,
      name: "Query",
      email: "query@gmail.com",
      address: "#27, Fisher Road, Columbous, USA - 88076.",
      imageUrl: "./images/profile_image.jpg",
      imageSize: 100,
    },
    {
      id: 3,
      name: "Loreta",
      email: "loreta@gmail.com",
      address: "#18, Stright Road, Columbous, USA - 98076.",
      imageUrl: "./images/profile_image.jpg",
      imageSize: 100,
    },
 ];
 
  return (
    <div>
      <h1>User Profile Card Project</h1>
      <div className="container">
        {
          userInfo.map((profileListItems)=> 
          (<UserProfileCard key={profileListItems.id} items={profileListItems}/>)
          )
        }
      </div>
    </div>
  );
}
export default App;

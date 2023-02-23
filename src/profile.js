import Adres from "./adres";
import Email from "./email";
import Name from "./name";
import PersonalInfo from "./personalInfo";

function Profile() {
    let list=[
        {
            id:1,
            name:"Elshen",
            email:"Elshenabbasov1988@gmail.com",
            adres:"Baku",
            personalInfo:"some text"
        }
    ]
    return (
      <div className="profile">
        {
          list.map(user=><Email
         Email={user.email}
         />)}
        
        {
            list.map(user=> <Name
            Name={user.name}
            />)
        }
        {
            list.map(user=><Adres
            Adres={user.adres}
            />)
        }
        {
            list.map(user=><PersonalInfo
            PersonalInfo={user.personalInfo}
            />)
        }
      </div>
    );
  }
  
  export default Profile;
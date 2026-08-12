import { useNavigate } from "react-router-dom";
import "../Styles/Profile.css"

function Profile({ onLogout }){

    const navigate= useNavigate();
    
    const user = JSON.parse(
        localStorage.getItem("user")

    )

    const removeLogin = () => {
        localStorage.removeItem("user")
        onLogout();
        navigate("/login"); 
}

     if (!user) {
    return (
        <div className="profile-page">
          <div className="profile-card">
            <h1>Please login first</h1>
            <button onClick={() => navigate("/login") }>
              Login
            </button>
          </div>
        </div>
    );
  }



    
    return(

         <div className="profile-page">

      <div className="profile-card">

        <div className="profile-image">
          👤
        </div>

        <h1>{user.name}</h1>

        <p>{user.email}</p>

        <p>{user.password}</p>

        <button onClick={removeLogin}>
          Logout
        </button>

      </div>

    </div>
  );
    

}

export default Profile;

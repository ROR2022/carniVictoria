import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import logoGoogle from "../../assets/images/loginGoogle.png";
import { imageLogoGoogle, imageLogoFace } from "../../assets/imgLinks";
import { primaryColor, lightPrimaryColor, accentColor } from "../../assets/colors";
import { useLogin } from "react-facebook";
import { useState, useEffect } from "react";
import useUser from '../../hooks/useUser';

const Login = () => {
  const [dataUser, setDataUser] = useUser();
  const [myDataUser, setMyDataUser] = useState({nameUser:'',email:'',photo:''})
  const [isConnected, setIsConnected] = useState(false);
  const { login, isLoading, status, error } = useLogin();
  const [resToken, setResToken] = useState({
    token:'',
    userID: ''
  });

  useEffect(() => {
    if(resToken.token&&!isConnected) {
      //console.log(resToken);
      recuperaDataUser();
    }
    if(isConnected&&myDataUser.email){
      console.log('userLogged:..',myDataUser);
      setDataUser({
        ...dataUser,
        nameUser: myDataUser.nameUser,
        emailUser: myDataUser.email,
        urlImageUser: myDataUser.photo,
        isLogged: true
      })
    }
    
  
    return 
  }, [resToken,myDataUser])
  
  const recuperaDataUser = async ()=>{
    try {
      const dataUser = await axios.get(`https://graph.facebook.com/${resToken.userID}?fields=id,name,email,picture&access_token=${resToken.token}`);
      console.log('dataUser:..',dataUser);
      if (dataUser.data?.email){
        setMyDataUser({
          nameUser: dataUser.data.name,
          email: dataUser.data.email,
          photo: dataUser.data.picture.data.url
        })
        setIsConnected(true);
      }
    } catch (error) {
      console.log(error);
    }
  }
 

   const handleLogin = async()=>{
    handleLogout();
    try {
      const response = await login({
        scope: "email, public_profile",
        return_scopes: true,
      });
      //setIsConnected(response.status);
      
      console.log("response:..", response);
      const myToken= response.authResponse?.accessToken;
      const myUser= response.authResponse?.userID;
      setResToken({
              token: myToken,
              userID: myUser
      });

      
    } catch (error) {
      console.log(error.message);
    }
  } 

  

  const handleLogout = ()=>{
    window.FB.logout((response) => {
      setIsConnected(false);
      console.log(response);
      // user is now logged out
    });
  }

  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      //setMyTokenResponse(tokenResponse);
      // fetching userinfo can be done on the client or the server
      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then((res) => res.data);

      console.log("UserInfo:..", userInfo);
      if(userInfo.email){
        setMyDataUser({
          nameUser: userInfo.name,
          email: userInfo.email,
          photo: userInfo.picture
        })
        setIsConnected(true);
      }

      // flow: 'implicit', // implicit is the defaul
    },
  });

  return (
    <div>
      <div
        style={{
          cursor: "pointer",
          border: `3px solid ${primaryColor}90`,
          width: "300px",
        }}
        onClick={loginGoogle}
        className="text-center rounded ms-auto me-auto p-2 mt-3"
      >
        <img
          style={{ width: "30px" }}
          className="me-2"
          src={imageLogoGoogle}
          alt="logoGoogle"
        />
        <span className="text-primary fs-5">Ingresa con Google</span>
      </div>
      {/* <div
        style={{
          cursor: "pointer",
          border: `3px solid ${primaryColor}90`,
          width: "300px",
        }}
        onClick={handleLogin}
        className="text-center rounded ms-auto me-auto p-2 mt-3"
      >
        <img
          style={{ width: "30px" }}
          className="me-2"
          src={imageLogoFace}
          alt="logoGoogle"
        />
        <span className="text-primary fs-5">Ingresa con Facebook</span>
      </div> */}
    </div>
  );
};

export default Login;

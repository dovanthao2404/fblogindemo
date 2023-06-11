import axios from "axios";
import React from "react";
import FacebookLogin from "react-facebook-login";
export default function LoginFacebook() {
  const responseFacebook = (response) => {
    axios({
      url: "https://shop.cyberlearn.vn/api/Users/facebooklogin",
      method: "post",
      data: {
        facebookToken: response.accessToken,
      },
    }).then((res) => {
      //Lưu vào localstorage
      localStorage.setItem("accessToken", res.data.content.accessToken);
    });
  };

  return (
    <div>
      <FacebookLogin
        appId="1586212718535639"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
  );
}
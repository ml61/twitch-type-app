import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "110622272553-vv1ctv7bvb7sn8ena1j52h466t96kj1c.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}
export default GoogleAuth;

// Method 1: (We don't verify the token)

import { useRouter } from "next/router";
const withAuth = (WrappedComponent) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const accessToken = localStorage.getItem("accessToken");

      // If there is no access token we redirect to "/" page.
      if (!accessToken) {
        Router.replace("/feed/login");
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;

// Method 2: We need to verify the token.
// HOC/withAuth.jsx
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import verifyToken from "services/verifyToken";

// const withAuth = (WrappedComponent) => {
//   return (props) => {
//     const Router = useRouter();
//     const [verified, setVerified] = useState(false);

//     useEffect(async () => {
//       const accessToken = localStorage.getItem("accessToken");
//       // if no accessToken was found,then we redirect to "/" page.
//       if (!accessToken) {
//         Router.replace("/");
//       } else {
//         // we call the api that verifies the token.
//         const data = await verifyToken(accessToken);
//         // if token was verified we set the state.
//         if (data.verified) {
//           setVerified(data.verified);
//         } else {
//           // If the token was fraud we first remove it from localStorage and then redirect to "/"
//           localStorage.removeItem("accessToken");
//           Router.replace("/");
//         }
//       }
//     }, []);

//     if (verified) {
//       return <WrappedComponent {...props} />;
//     } else {
//       return null;
//     }
//   };
// };

// export default withAuth;
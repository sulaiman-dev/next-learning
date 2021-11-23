
import { apisBasepath } from "../../config"
import { useRouter } from "next/router"
import { route } from "next/dist/server/router";

const Login = () => {

    const router = useRouter();
    const loginUser = () => {
        let user = {
            email: "eightkhan@email.com",
            password: "eightkhan"
        }

        fetch(`${apisBasepath}/auth/login`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(user),
          })
          .then(response => response.json())
          .then(data => {
            // console.log('Success:', data);
            localStorage.setItem("accessToken", data.token)
            router.push('/feed')
          })
          .catch((error) => {
            console.error('Error:', error);
          });

    }
    return (
        <div>
            <button onClick={loginUser}>Login</button>
        </div>
    )
}

export default Login
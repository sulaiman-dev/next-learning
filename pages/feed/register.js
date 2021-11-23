
import { apisBasepath } from "../../config"


const Register = () => {

    const registerUser = () => {
        let newUser = {
            firstName: "eight",
            lastName: "khan",
            email: "eightkhan@email.com",
            password: "eightkhan"
        }

        fetch(`${apisBasepath}/auth/register`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(newUser),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });

    }
    return (
        <div>
            <button onClick={registerUser}>Register</button>
        </div>
    )
}

export default Register

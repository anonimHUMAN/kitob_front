import signin from "../../qwe/images/signin.png";
import './signup.css'
import './responsiveA.css'
import { useRef } from "react";
import config from "../../qwe/config"
import axios from "axios"

function SignIn() {
    let inp1 = useRef(null)
    let inp2 = useRef(null)

    const gcv = (inp) => { return inp.current.value }

    const checkBtn = async () => {
        if (gcv(inp1) && gcv(inp2)) {
            let user = {
                email: gcv(inp1),
                password: gcv(inp2)
            }
            let res = await axios.post(`${config.url}/auth/signin`, user)
            let TOKEN = res.data.token
            window.localStorage.setItem('token', TOKEN)
            window.localStorage.setItem('uceremail', gcv(inp1))
            alert(res.data.message)
            if (res.data.status === 'ucer') {
                window.location.replace('/home')
            } else if (res.data.status === 'admin') {
                window.location.replace('/homeadmin')
            } else if (res.data.status === 'superadmin') {
                window.location.replace('/homesadmin')
            }
        }
    }
    return (
        <>
            <div className="main1">
                <div className="left">
                    <img src={signin} alt="Background Image" />
                </div>
                <div className="right">
                    <h1>Sign In</h1>
                    <h3>Do not you have an account? <a href="/signup">Sign Up</a></h3>
                    <input ref={inp1} type="email" placeholder="Email" required />
                    <input ref={inp2} type="password" placeholder="Password" required />
                    <button onClick={checkBtn} type="button">Next Step</button>
                </div>
            </div>
        </>
    )
}

export default SignIn
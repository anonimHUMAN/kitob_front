import { useRef, useState } from "react";
import config from "../../qwe/config"
import axios from "axios"
import signup from "../../qwe/images/signup.png";
import './signup.css'

function SignUp() {
    let inp1 = useRef(null)
    let inp2 = useRef(null)
    let inp3 = useRef(null)
    let inp4 = useRef(null)
    let inp5 = useRef(null)
    const gcv = (inp) => { return inp.current.value }
    const checkBtn = async () => {
        if (gcv(inp1) && gcv(inp2) && gcv(inp3) && gcv(inp4) && gcv(inp5)) {
            let user = {
                firstName: gcv(inp1),
                lastName: gcv(inp2),
                phone: gcv(inp3),
                email: gcv(inp4),
                password: gcv(inp5),
            }
            let res = await axios.post(`${config.url}/auth/signup`, user)
            let TOKEN = res.data.token
            window.localStorage.setItem('token', TOKEN)
            window.localStorage.setItem('uceremail', gcv(inp4))
            if (res.data.data.status === 'ucer') {
                window.location.replace('/home')
            }
        }
    }
    return (
        <>
            <div className="main1">
                <div className="left">
                    <img src={signup} alt="Background Image" />
                </div>
                <div className="right">
                    <h1>Sign Up</h1>
                    <h3>Already have an account? <a href="#">Sign In</a></h3>
                    <input ref={inp1} type="text" placeholder="First Name" required />
                    <input ref={inp2} type="text" placeholder="Last Name" required />
                    <input ref={inp3} type="number" placeholder="Phone" required />
                    <input ref={inp4} type="email" placeholder="Email" required />
                    <input ref={inp5} type="password" placeholder="Password" required />
                    <button onClick={checkBtn} type="button">Next Step</button>
                </div>
            </div>
        </>
    )
}

export default SignUp
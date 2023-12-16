import { useEffect, useRef, useState } from "react";
import axios from "axios";
import config from "../../qwe/config";
import profPhoto from "../../qwe/images/photo.jpeg";
import image from "../../qwe/images/group2.png";
import image1 from "../../qwe/images/image3.png"
import image6 from "../../qwe/images/image6.png"
import "./boshsahifa.css";
import "./responsiveC.css";

function BoshSahifa() {
    const [search, setSearch] = useState(false)
    const [search1, setSearch1] = useState(true)

    const [open, setOpen] = useState(true)
    const [close, setClose] = useState(false)

    const [log, setLog] = useState(true)
    const [img, setImg] = useState(false)

    const [t, setT] = useState(true)
    const [j, setJ] = useState(false)
    const [s, setS] = useState(false)
    const [m, setM] = useState(false)

    const [bow, setBow] = useState(true)
    const [nasr, setNasr] = useState(false)
    const [nazm, setNazm] = useState(false)
    const [maqola, setMaqola] = useState(false)

    const [prof, setProf] = useState(false);
    const [prof1, setProf1] = useState(true);
    const [prof2, setProf2] = useState(false);
    const [prof3, setProf3] = useState(false);

    const [data, setData] = useState([])

    const [tem, setTem] = useState([])
    const [jad, setJad] = useState([])
    const [sov, setSov] = useState([])
    const [mus, setMus] = useState([])

    const [nasr1, setNasr1] = useState([])
    const [nazm1, setNazm1] = useState([])

    let inp1 = useRef(null)
    let inp2 = useRef(null)
    let inp3 = useRef(null)
    let inp4 = useRef(null)
    let inpS = useRef('')

    const toggleLink = (id) => {
        window.localStorage.setItem('idAuthor', id)
        window.location.replace('/muallif');
    };
    const toggle1Book = (id) => {
        window.localStorage.setItem('idBook', id)
        window.location.replace('/bookview');
    };

    const toggleTem = () => {
        setT(true)
        setJ(false)
        setS(false)
        setM(false)
    };
    const toggleJad = () => {
        setT(false)
        setJ(true)
        setS(false)
        setM(false)
    };
    const toggleSov = () => {
        setT(false)
        setJ(false)
        setS(true)
        setM(false)
    };
    const toggleMus = () => {
        setT(false)
        setJ(false)
        setS(false)
        setM(true)
    };

    const toggleBow = () => {
        setBow(true)
        setNasr(false)
        setNazm(false)
        setMaqola(false)
        setProf(false)
    };
    const toggleNasr = () => {
        setBow(false)
        setNasr(true)
        setNazm(false)
        setMaqola(false)
        setProf(false)
    };
    const toggleNazm = () => {
        setBow(false)
        setNasr(false)
        setNazm(true)
        setMaqola(false)
        setProf(false)
    };
    const toggleProf = () => {
        setBow(false)
        setNasr(false)
        setNazm(false)
        setMaqola(false)
        setProf(true)
    };

    const toggleProf1 = () => {
        setProf1(true);
        setProf2(false);
        setProf3(false);
    };
    const toggleProf2 = () => {
        setProf1(false);
        setProf2(true);
        setProf3(false);
    };
    const toggleProf3 = () => {
        setProf1(false);
        setProf2(false);
        setProf3(true);
    };

    const toggSignIn = () => { window.location.replace('/signin'); };
    const toggleHome = () => { window.location.replace('/home'); };

    const toggSearch = () => {
        setSearch(!search)
        setSearch1(!search1)
    };

    const toggMenu = () => {
        setOpen(!open)
        setClose(!close)
    };

    // const getBooks = async () => {
    //     let res = await axios.get(`${config.url}/routeadmin/books`, {
    //         headers: {
    //             authorization: window.localStorage.getItem("token")
    //         }
    //     })
    //     if (res.data.message === "No authorization on this route" || res.data.message === "Token is not defined" || res.data.message === "Token wrong") {
    //         window.location.replace('/')
    //     }
    //     setBooksTab(res.data.ucers);
    // }
    const getAuthors = async () => {
        let res = await axios.get(`${config.url}/routeucer/authors`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setData(res.data.ucers);
    }
    const searchAuthor = async () => {
        if (inpS.current.value === '') {
            alert("Complete input!!!")
        } else {
            let data = {
                author1: inpS.current.value
            }
            let res = await axios.post(`${config.url}/routeucer/author1`, data, {
                headers: {
                    authorization: window.localStorage.getItem("token")
                }
            })
            console.log(res);
            // alert(res.data.message)
            // inpS.current.value = ''
        }
    }

    const getT = async () => {
        let res = await axios.get(`${config.url}/routeucer/kategT`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setTem(res.data.ucers);
    }
    const getJ = async () => {
        let res = await axios.get(`${config.url}/routeucer/kategJ`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setJad(res.data.ucers);
    }
    const getS = async () => {
        let res = await axios.get(`${config.url}/routeucer/kategS`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setSov(res.data.ucers);
    }
    const getM = async () => {
        let res = await axios.get(`${config.url}/routeucer/kategM`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setMus(res.data.ucers);
    }

    const getNasr = async () => {
        let res = await axios.get(`${config.url}/routeucer/nasr`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setNasr1(res.data.ucers);
    }
    const getNazm = async () => {
        let res = await axios.get(`${config.url}/routeucer/nazm`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setNazm1(res.data.ucers);
    }

    const change = async () => {
        if (inp1.current.value === '' || inp2.current.value === '' || inp3.current.value === '' || inp4.current.value === '') {
            alert("Complete all inputs!!!")
        } else {
            if (inp3.current.value == inp4.current.value) {
                let data = {
                    email: inp1.current.value,
                    oldPassword: inp2.current.value,
                    newPassword: inp3.current.value
                }
                let res = await axios.post(`${config.url}/routeucer/editpass`, data, {
                    headers: {
                        authorization: window.localStorage.getItem("token")
                    }
                })
                alert(res.data.message)
                inp1.current.value = ''
                inp2.current.value = ''
                inp3.current.value = ''
                inp4.current.value = ''
            } else {
                alert("New password and confirm password not a same!")
            }
        }
    }

    const checkToken = () => {
        const token = window.localStorage.getItem('token')
        if (!token && token == 'undefined' || token == 'Token wrong' || token == 'Token is not defined' || token == 'No authorization on this route' || token == 'null') {
            setLog(true)
            setImg(false)
        } else if (token) {
            setLog(false)
            setImg(true)
        }
    };

    useEffect(() => {
        checkToken()
        getAuthors()
        getT()
        getJ()
        getS()
        getM()
        getNasr()
        getNazm()
    }, [])

    return (
        <>
            <div className="main">
                <div className="navbar">
                    <div className="l">
                        <h1>KitobUz</h1>
                    </div>
                    {/* block */}
                    <div className="c">
                        <div className="c1">
                            {search1 && <ul>
                                <li><a onClick={toggleBow} href="#">Bosh Sahifa</a></li>
                                <li><a onClick={toggleNasr} href="#">Nasr</a></li>
                                <li><a onClick={toggleNazm} href="#">Nazm</a></li>
                                <li><a href="https://t.me/NET_theif" target="_blank">Support</a></li>
                            </ul>}
                            {search && <div className="search">
                                <input ref={inpS} className="searchInp" type="text" name="" id="" />
                                <button onClick={searchAuthor} className="searchBtn">Search</button>
                            </div>}
                            <i onClick={toggSearch}><ion-icon name="search-circle-outline"></ion-icon></i>
                        </div>
                        {img && <div className="prof">
                            <img onClick={toggleHome} src={profPhoto} alt="img" />
                        </div>}
                        {log && <div className="prof">
                            <button onClick={() => { toggSignIn() }}>Login</button>
                        </div>}
                    </div>
                    {/* respon */}
                    <div className="c11">
                        <div className="c1">
                            {search && <div className="search">
                                <input className="searchInp" type="text" placeholder="Write author name... " />
                                <button onClick={searchAuthor} className="searchBtn">Search</button>
                            </div>}
                            <i onClick={toggSearch}><ion-icon name="search-circle-outline"></ion-icon></i>
                            {close && <div className="closeMenu">
                                <ul>
                                    <li><a href="#" data-text="Bosh Sahifa">Bosh Sahifa</a></li>
                                    <li><a href="#" data-text="Nasr">Nasr</a></li>
                                    <li><a href="#" data-text="Nazm">Nazm</a></li>
                                    <li><a href="#" data-text="Forum">Support</a></li>
                                </ul>
                            </div>}
                            {open && <i onClick={toggMenu}><ion-icon name="menu-outline"></ion-icon></i>}
                            {close && <i onClick={toggMenu}><ion-icon name="chevron-collapse-outline"></ion-icon></i>}
                        </div>
                    </div>
                </div>
                {prof && <div className="div">
                    {prof1 && <div className="body">
                        <div className="top">
                            <div className="l ll">
                                <div className="num def">
                                    <h1>1</h1>
                                </div>
                                <h2 onClick={toggleProf1}>My account</h2>
                            </div>
                            <div className="l">
                                <div className="num">
                                    <h1>2</h1>
                                </div>
                                <h2 onClick={toggleProf2}>Security</h2>
                            </div>
                            <div className="l">
                                <div className="num">
                                    <h1>3</h1>
                                </div>
                                <div className="al3">
                                    <h2 onClick={toggleProf3}>Settings</h2>
                                </div>
                            </div>
                        </div>
                        <div className="pass">
                            <div className="l">
                                <div className="all">
                                    <img src={image6} alt="Profil rasmi" />
                                </div>
                            </div>
                            <div className="r">
                                <h1>My profile</h1>
                                <label htmlFor="">First Name</label>
                                <input className="long" type="text" name="" id="" placeholder="Og'abek" />
                                <p>Please enter your first name.</p>
                                <label htmlFor="">Last Name</label>
                                <input className="long" type="text" name="" id="" placeholder="Otabekov" />
                                <p>Please enter your last name.</p>
                                <div className="all2">
                                    <div className="in">
                                        <label htmlFor="">Phone</label>
                                        <input className="short" type="number" name="" id="" placeholder="+998900316352" />
                                        <p>Please enter your phone number.</p>
                                    </div>
                                    <div className="in">
                                        <label htmlFor="">Email</label>
                                        <input className="short" type="email" name="" id="" placeholder="....@gmail.com" />
                                        <p>Please enter your email address.</p>
                                    </div>
                                </div>
                                <div className="line"></div>
                                <div className="btt">
                                    <button>Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {prof2 && <div className="body">
                        <div className="top">
                            <div className="l">
                                <div className="num">
                                    <h1>1</h1>
                                </div>
                                <h2 onClick={toggleProf1}>My account</h2>
                            </div>
                            <div className="l ll">
                                <div className="num def">
                                    <h1>2</h1>
                                </div>
                                <h2 onClick={toggleProf2}>Security</h2>
                            </div>
                            <div className="l">
                                <div className="num">
                                    <h1>3</h1>
                                </div>
                                <div className="al3">
                                    <h2 onClick={toggleProf3}>Settings</h2>
                                </div>
                            </div>
                        </div>
                        <div className="pass pass1">
                            <div className="r">
                                <h1>Change Or Recover Your Password:</h1>
                                <label htmlFor="">Email</label>
                                <input ref={inp1} className="long" type="email" name="" id="" placeholder="...@gmail.com" />
                                <p>Please enter your email.</p>
                                <label htmlFor="">Current Password</label>
                                <input ref={inp2} className="long" type="password" name="" id="" placeholder="*********" />
                                <p>Please enter your old password.</p>
                                <div className="all2">
                                    <div className="in">
                                        <label htmlFor="">New password</label>
                                        <input ref={inp3} className="short" type="password" name="" id="" placeholder="*********" />
                                        <p>Please enter your new password.</p>
                                    </div>
                                    <div className="in">
                                        <label htmlFor="">Confirm password</label>
                                        <input ref={inp4} className="short" type="password" name="" id="" placeholder="*********" />
                                        <p>Please enter your new password.</p>
                                    </div>
                                </div>
                                <div className="line"></div>
                                <div className="btt">
                                    <button onClick={change}>Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {prof3 && <div className="body">
                        <div className="top">
                            <div className="l">
                                <div className="num">
                                    <h1>1</h1>
                                </div>
                                <h2 onClick={toggleProf1}>My account</h2>
                            </div>
                            <div className="l">
                                <div className="num">
                                    <h1>2</h1>
                                </div>
                                <h2 onClick={toggleProf2}>Security</h2>
                            </div>
                            <div className="l ll">
                                <div className="num def">
                                    <h1>3</h1>
                                </div>
                                <div className="al3">
                                    <h2 onClick={toggleProf3}>Settings</h2>
                                </div>
                            </div>
                        </div>
                        <div className="pass pass1">
                            <div className="r">
                                <h1>Settings</h1>
                                <label htmlFor="">Language</label>
                                <input className="long" type="text" name="" id="" placeholder="English" />
                                <p>Please choose your language.</p>
                                <label htmlFor="">Theme</label>
                                <i><ion-icon name="moon-outline"></ion-icon></i>
                                <div className="line"></div>
                                <div className="btt">
                                    <button>Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>}
                {bow && <div className="container">
                    <img src={image} alt="" />
                    <div className="kateg">
                        <h1>Asosiy Kategoriyalar</h1>
                        <div className="all">
                            <ul>
                                <li><a onClick={toggleTem} href="#">Temuriylar davri</a></li>
                                <li><a onClick={toggleJad} href="#">Jadid adabiyoti</a></li>
                                <li><a onClick={toggleSov} href="#">Sovet davri</a></li>
                                <li><a onClick={toggleMus} href="#">Mustaqillik davri</a></li>
                            </ul>
                        </div>
                        {t && <div className="cards">
                            {tem.map((item, i) => {
                                return (
                                    <div key={i + 1} className="card">
                                        <img onClick={() => { toggleLink(item._id) }} src={item.image} alt="" />
                                        <h1>{item.firstName} {item.lastName}</h1>
                                        <h3>{item.birth}-{item.death}</h3>
                                        <div className="bot">
                                            <div className="l">
                                                <i><ion-icon name="book-outline"></ion-icon></i>
                                                <p>34</p>
                                            </div>
                                            <div className="r">
                                                <i><ion-icon name="headset-outline"></ion-icon></i>
                                                <p>13</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>}
                        {j && <div className="cards">
                            {jad.map((item, i) => {
                                return (
                                    <div key={i + 1} className="card">
                                        <img onClick={() => { toggleLink(item._id) }} src={item.image} alt="" />
                                        <h1>{item.firstName} {item.lastName}</h1>
                                        <h3>{item.birth}-{item.death}</h3>
                                        <div className="bot">
                                            <div className="l">
                                                <i><ion-icon name="book-outline"></ion-icon></i>
                                                <p>34</p>
                                            </div>
                                            <div className="r">
                                                <i><ion-icon name="headset-outline"></ion-icon></i>
                                                <p>13</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>}
                        {s && <div className="cards">
                            {sov.map((item, i) => {
                                return (
                                    <div key={i + 1} className="card">
                                        <img onClick={() => { toggleLink(item._id) }} src={item.image} alt="" />
                                        <h1>{item.firstName} {item.lastName}</h1>
                                        <h3>{item.birth}-{item.death}</h3>
                                        <div className="bot">
                                            <div className="l">
                                                <i><ion-icon name="book-outline"></ion-icon></i>
                                                <p>34</p>
                                            </div>
                                            <div className="r">
                                                <i><ion-icon name="headset-outline"></ion-icon></i>
                                                <p>13</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>}
                        {m && <div className="cards">
                            {mus.map((item, i) => {
                                return (
                                    <div key={i + 1} className="card">
                                        <img onClick={() => { toggleLink(item._id) }} src={item.image} alt="" />
                                        <h1>{item.firstName} {item.lastName}</h1>
                                        <h3>{item.birth}-{item.death}</h3>
                                        <div className="bot">
                                            <div className="l">
                                                <i><ion-icon name="book-outline"></ion-icon></i>
                                                <p>34</p>
                                            </div>
                                            <div className="r">
                                                <i><ion-icon name="headset-outline"></ion-icon></i>
                                                <p>13</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>}
                    </div>
                </div>}
                {nasr && <div className="container">
                    <img src={image} alt="" />
                    <div className="kateg">
                        <h1>Nasr</h1>
                        <br />
                        <div className="cards">
                            {nasr1.map((item, i) => {
                                return (
                                    <div key={i + 1} className="card">
                                        <img onClick={() => { toggle1Book(item._id) }} src={image1} alt="" />
                                        <h1>{item.title}</h1>
                                        <h3>{item.author}</h3>
                                        <div className="bb">
                                            <i><ion-icon name="star-outline"></ion-icon></i>
                                            <p>4.1</p>
                                            <p>•</p>
                                            <p>3400 ta fikrlar</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>}
                {nazm && <div className="container">
                    <img src={image} alt="" />
                    <div className="kateg">
                        <h1>Nazm</h1>
                        <br />
                        <div className="cards">
                            {nazm1.map((item, i) => {
                                return (
                                    <div key={i + 1} className="card">
                                        <img onClick={() => { toggle1Book(item._id) }} src={image1} alt="" />
                                        <h1>{item.title}</h1>
                                        <h3>{item.author}</h3>
                                        <div className="bb">
                                            <i><ion-icon name="star-outline"></ion-icon></i>
                                            <p>4.1</p>
                                            <p>•</p>
                                            <p>3400 ta fikrlar</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default BoshSahifa
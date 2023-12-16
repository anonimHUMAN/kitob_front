import { useEffect, useRef, useState } from "react";
import axios from "axios";
import config from "../../qwe/config";
import profPhoto from "../../qwe/images/photo.jpeg";
import image24 from "../../qwe/images/image24.png"
import image3 from "../../qwe/images/image3.png"
import image2 from "../../qwe/images/image2.png"
import './boshsahifa.css'
import './responsiveC.css'

function Home() {
    const [search, setSearch] = useState(false)
    const [search1, setSearch1] = useState(true)
    const [open, setOpen] = useState(true)
    const [close, setClose] = useState(false)
    const [def, setDef] = useState(true)
    const [edit, setEdit] = useState(false)

    const [info, setInfo] = useState([])
    const [info1, setInfo1] = useState([])
    let inp1 = useRef(null)
    const gcv = (inp) => { return inp.current.value }
    const toggSearch = () => {
        setSearch(!search)
        setSearch1(!search1)
    };
    const toggMenu = () => {
        setOpen(!open)
        setClose(!close)
    };
    const editBio = () => {
        setDef(false)
        setEdit(true)
    };
    const getUcerData = async () => {
        let data = {
            ucerakk: window.localStorage.getItem('uceremail')
        }
        let res = await axios.post(`${config.url}/routeucer/uceracc`, data, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setInfo(res.data.ucers[0])
        setInfo1(res.data.ucers[0].books)
    };
    const submitBio = async () => {
        let data = {
            uceremail: `${window.localStorage.getItem('uceremail')}`,
            bio: gcv(inp1),
        }
        let res = await axios.post(`${config.url}/routeucer/bio`, data, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setDef(true)
        setEdit(false)
        getUcerData()
    };

    useEffect(() => {
        getUcerData()
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
                                <li><a href="/">Bosh Sahifa</a></li>
                                <li><a href="/">Nasr</a></li>
                                <li><a href="/">Nazm</a></li>
                                <li><a href="https://t.me/NET_theif" target="_blank">Support</a></li>
                            </ul>}
                            {search && <div className="search">
                                <input className="searchInp" type="text" name="" id="" />
                                <button className="searchBtn">Search</button>
                            </div>}
                            <i onClick={toggSearch}><ion-icon name="search-circle-outline"></ion-icon></i>
                        </div>
                        <div className="prof">
                            <img src={profPhoto} alt="img" />
                        </div>
                    </div>
                    {/* respon */}
                    <div className="c11">
                        <div className="c1">
                            {search && <div className="search">
                                <input className="searchInp" type="text" name="" id="" />
                                <button className="searchBtn">Search</button>
                            </div>}
                            <i onClick={toggSearch}><ion-icon name="search-circle-outline"></ion-icon></i>
                            {close && <div className="closeMenu">
                                <ul>
                                    <li><a href="#" data-text="Bosh Sahifa">Bosh Sahifa</a></li>
                                    <li><a href="#" data-text="Nasr">Nasr</a></li>
                                    <li><a href="#" data-text="Nazm">Nazm</a></li>
                                    <li><a href="#" data-text="Forum">Forum</a></li>
                                </ul>
                            </div>}
                            {open && <i onClick={toggMenu}><ion-icon name="menu-outline"></ion-icon></i>}
                            {close && <i onClick={toggMenu}><ion-icon name="chevron-collapse-outline"></ion-icon></i>}
                        </div>
                    </div>
                </div>
                <div className="home">
                    <div className="card">
                        <div className="l">
                            <img src={image24} alt="Foydalanuvchi rasmi" />
                            <div className="i">
                                <i><ion-icon name="star-outline"></ion-icon></i>
                            </div>
                            <h3>Oltin kitobxon</h3>
                            <p>...</p>
                        </div>
                        <div className="r">
                            <h1>{info?.firstName} {info?.lastName}</h1>
                            <h2>Phone: <p>{info?.phone}</p></h2>
                            <h2>email: <p>{info?.email}</p></h2>
                            {def && <div className="bio">
                                <h2>Bio: <p>{info?.bio}</p></h2>
                                <i onClick={editBio}><ion-icon name="create-outline"></ion-icon></i>
                            </div>}
                            {edit && <div className="bio">
                                <h2>Bio: <p><input ref={inp1} type="text" /></p></h2>
                                <i onClick={submitBio}><ion-icon name="send-outline"></ion-icon></i>
                            </div>}
                        </div>
                    </div>
                    <div className="b2">
                        <div className="l">
                            <div className="cards">
                                <div className="card">
                                    <div className="top">
                                        <h2>Hozir o'qilmoqda...</h2>
                                        <i><ion-icon name="grid-outline"></ion-icon></i>
                                    </div>
                                    <div className="center">
                                        {info1[0]?.title && <div className="m">
                                            <div className="l">
                                                <img src={image3} alt="Kitob rasmi" />
                                            </div>
                                            <div className="r">
                                                <div className="t">
                                                    <h1>{info1[0]?.title}</h1>
                                                    <h3>50%</h3>
                                                </div>
                                                <div className="t">
                                                    <div className="le">
                                                        <div className="in"></div>
                                                    </div>
                                                    <button>Yangilash <i><ion-icon name="refresh-outline"></ion-icon></i></button>
                                                </div>
                                            </div>
                                        </div>}
                                        {info1[1]?.title && <div className="m">
                                            <div className="l">
                                                <img src={image3} alt="Kitob rasmi" />
                                            </div>
                                            <div className="r">
                                                <div className="t">
                                                    <h1>{info1[1]?.title}</h1>
                                                    <h3>50%</h3>
                                                </div>
                                                <div className="t">
                                                    <div className="le">
                                                        <div className="in"></div>
                                                    </div>
                                                    <button>Yangilash <i><ion-icon name="refresh-outline"></ion-icon></i></button>
                                                </div>
                                            </div>
                                        </div>}
                                        {info1[2]?.title && <div className="m">
                                            <div className="l">
                                                <img src={image3} alt="Kitob rasmi" />
                                            </div>
                                            <div className="r">
                                                <div className="t">
                                                    <h1>{info1[2]?.title}</h1>
                                                    <h3>50%</h3>
                                                </div>
                                                <div className="t">
                                                    <div className="le">
                                                        <div className="in"></div>
                                                    </div>
                                                    <button>Yangilash <i><ion-icon name="refresh-outline"></ion-icon></i></button>
                                                </div>
                                            </div>
                                        </div>}
                                        {info1[3]?.title && <div className="m">
                                            <div className="l">
                                                <img src={image3} alt="Kitob rasmi" />
                                            </div>
                                            <div className="r">
                                                <div className="t">
                                                    <h1>{info1[3]?.title}</h1>
                                                    <h3>50%</h3>
                                                </div>
                                                <div className="t">
                                                    <div className="le">
                                                        <div className="in"></div>
                                                    </div>
                                                    <button>Yangilash <i><ion-icon name="refresh-outline"></ion-icon></i></button>
                                                </div>
                                            </div>
                                        </div>}
                                    </div>
                                    <div className="bottom">
                                        <button>Barchasini ko'rish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="r">
                            <div className="top">
                                <h1>Saqlangan kitoblar</h1>
                            </div>
                            <div className="cards">
                                {info1.map((item, i) => {
                                    return (
                                        <div className="card">
                                            <img src={image2} alt="Kitob rasmi" />
                                            <h1>{item.title}</h1>
                                            <h3>{item.author}</h3>
                                            <div className="bb">
                                                <i><ion-icon name="star-outline"></ion-icon></i>
                                                <p>4.1</p>
                                                <p>-</p>
                                                <p>3400ta fikr</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
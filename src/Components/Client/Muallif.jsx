import profPhoto from "../../qwe/images/photo.jpeg";
import image3 from "../../qwe/images/image3.png"
import './boshsahifa.css'
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../qwe/config";

function Muallif() {
    const [search, setSearch] = useState(false)
    const [search1, setSearch1] = useState(true)
    const [open, setOpen] = useState(true)
    const [close, setClose] = useState(false)

    const [data1, setData1] = useState([])
    const [booksgr, setBooksGr] = useState([]);

    const toggleLink1 = () => { window.location.replace('/muallif2'); };
    const toggleLink = () => { window.location.replace('/bookview'); };
    const toggle1Book = (id) => {
        window.localStorage.setItem('idBook', id)
        window.location.replace('/bookview');
    };

    const toggSearch = () => {
        setSearch(!search)
        setSearch1(!search1)
    };
    const toggMenu = () => {
        setOpen(!open)
        setClose(!close)
    };
    const get1Authors = async () => {
        let res = await axios.get(`${config.url}/routeucer/author1/${window.localStorage.getItem("idAuthor")}`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setData1(res.data.data);
    }
    const get1AuthorBooks = async () => {
        let res = await axios.get(`${config.url}/routeucer/author/books/${window.localStorage.getItem("idAuthor")}`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        if (res.data.message === "No authorization on this route" || res.data.message === "Token is not defined" || res.data.message === "Token wrong") {
            window.location.replace('/')
        }
        setBooksGr(res.data.data.books);
    }

    useEffect(() => {
        get1Authors()
        get1AuthorBooks()
    }, [])

    return (
        <>
            <div className="main main2">
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
                            <i><ion-icon name="chevron-down-outline"></ion-icon></i>
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
                <div className="cent">
                    <div className="left">
                        <img src={data1.image} alt="Muallif Rasmi" />
                        <div className="bott">
                            <div className="l">
                                <p>Tavallud sanasi</p>
                                <h1>{data1.birth}</h1>
                                <p>{data1.country}</p>
                            </div>
                            <div className="r">
                                <p>Vafot etgan sanasi</p>
                                <h1>{data1.death}</h1>
                                <p>{data1.country}</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <h1>{data1.firstName} {data1.lastName}</h1>
                        <h3>{data1.bio}</h3>
                        <div className="in">
                            <i><ion-icon name="bookmark-outline"></ion-icon></i>
                            <h4>Ijodi</h4>
                        </div>
                        <ul>
                            <li>Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.</li>
                        </ul>
                        <div className="t">
                            <h1>Asarlari</h1>
                            <h2 onClick={toggleLink1}>Barchasini ko'rish</h2>
                        </div>
                        <div className="cards">
                            {booksgr[0]?.title && <div className="card">
                                <img onClick={() => { toggle1Book(booksgr[0]._id) }} src={image3} alt="Kitob rasmi" />
                                <h1>{booksgr[0]?.title}</h1>
                                <div className="bb">
                                    <i><ion-icon name="star-outline"></ion-icon></i>
                                    <p>4.1</p>
                                    <p>•</p>
                                    <p>3400 ta fikrlar</p>
                                </div>
                            </div>}
                            {booksgr[1]?.title && <div className="card">
                                <img onClick={() => { toggle1Book(booksgr[1]._id) }} src={image3} alt="Kitob rasmi" />
                                <h1>{booksgr[1]?.title}</h1>
                                <div className="bb">
                                    <i><ion-icon name="star-outline"></ion-icon></i>
                                    <p>4.1</p>
                                    <p>•</p>
                                    <p>3400 ta fikrlar</p>
                                </div>
                            </div>}
                            {booksgr[2]?.title && <div className="card">
                                <img onClick={() => { toggle1Book(booksgr[2]._id) }} src={image3} alt="Kitob rasmi" />
                                <h1>{booksgr[2]?.title}</h1>
                                <div className="bb">
                                    <i><ion-icon name="star-outline"></ion-icon></i>
                                    <p>4.1</p>
                                    <p>•</p>
                                    <p>3400 ta fikrlar</p>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Muallif
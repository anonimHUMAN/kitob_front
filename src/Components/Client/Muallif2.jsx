import profPhoto from "../../qwe/images/photo.jpeg";
import image from "../../qwe/images/group2.png";
import image1 from "../../qwe/images/image3.png"
import "./boshsahifa.css";
import { useEffect, useRef, useState } from "react";
import config from "../../qwe/config";
import axios from "axios";

function Muallif2() {
    const [search, setSearch] = useState(false)
    const [search1, setSearch1] = useState(true)
    const [open, setOpen] = useState(true)
    const [close, setClose] = useState(false)
    const [log, setLog] = useState(true)
    const [img, setImg] = useState(false)
    const [books, setBooks] = useState([])
    let inpS = useRef('')
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
    const toggleLink = () => { window.location.replace('/bookview'); };
    const toggleHome = () => { window.location.replace('/home'); };
    const toggSignIn = () => { window.location.replace('/signin'); };

    const toggSearch = () => {
        setSearch(!search)
        setSearch1(!search1)
    };
    const toggMenu = () => {
        setOpen(!open)
        setClose(!close)
    };
    const getBooks = async () => {
        let res = await axios.get(`${config.url}/routeucer/books`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setBooks(res.data.ucers);
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
        getBooks()
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
                                <input ref={inpS} className="searchInp" type="text" name="" id="" />
                                <button onClick={searchAuthor} className="searchBtn">Search</button>
                            </div>}
                            <i onClick={toggSearch}><ion-icon name="search-circle-outline"></ion-icon></i>
                        </div>
                        {img && <div className="prof">
                            <img onClick={toggleHome} src={profPhoto} alt="img" />
                            <i><ion-icon name="settings-outline"></ion-icon></i>
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
                <div className="container">
                    <img src={image} alt="" />
                    <div className="kateg">
                        <h1>Barcha kitoblar</h1>
                        <br />
                        <div className="cards">
                            {books.map((item, i) => {
                                return (
                                    <>
                                        <div key={item._id} className="card">
                                            <img onClick={toggleLink} src={image1} alt="" />
                                            <h1>{item.title}</h1>
                                            <h3>{item.author}</h3>
                                            <div className="bb">
                                                <i><ion-icon name="star-outline"></ion-icon></i>
                                                <p>4.1</p>
                                                <p>•</p>
                                                <p>3400 ta fikrlar</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Muallif2
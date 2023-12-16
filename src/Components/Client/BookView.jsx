import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../qwe/config";
import profPhoto from "../../qwe/images/photo.jpeg";
import image18 from "../../qwe/images/image18.png"
import image2 from "../../qwe/images/image2.png"
import './boshsahifa.css'

function BookView() {
    const [search, setSearch] = useState(false)
    const [search1, setSearch1] = useState(true)
    const [log, setLog] = useState(true)
    const [img, setImg] = useState(false)
    const [defIc, setDefIc] = useState(true)
    const [redIc, setRedIc] = useState(false)

    const [data, setData] = useState([])
    const [data1, setData1] = useState([])

    const toggIcon = () => {
        setDefIc(!defIc)
        setRedIc(!redIc)
    };
    const toggleLink = (id) => {
        window.localStorage.setItem('idBook', id)
        window.location.replace('/bookview');
    };
    const toggSignIn = () => { window.location.replace('/signin'); };
    const toggleHome = () => { window.location.replace('/home'); };

    const toggSearch = () => {
        setSearch(!search)
        setSearch1(!search1)
    };
    const getBooks = async () => {
        let res = await axios.get(`${config.url}/routeucer/books`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setData1(res.data.ucers);
    }
    const get1Book = async () => {
        let res = await axios.get(`${config.url}/routeucer/book1/${window.localStorage.getItem("idBook")}`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        setData(res.data.data);
    }
    
    const addBookToUcer = async () => {
        let data = {
            uceremail: `${window.localStorage.getItem("uceremail")}`,
            idBook: `${window.localStorage.getItem("idBook")}`
        }
        let res1 = await axios.post(`${config.url}/routeucer/addbook`, data, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        console.log(res1);
        // alert(res1.data.message)
    }
    const checkToken = () => {
        const token = window.localStorage.getItem('token')
        if (token || token != 'undefined' || token != 'Token wrong' || token != 'Token is not defined' || token != 'No authorization on this route') {
            setLog(false)
            setImg(true)
        } else if (token == 'undefined' || token == 'Token wrong' || token == 'Token is not defined' || token == 'No authorization on this route') {
            setLog(true)
            setImg(false)
        }
    };

    useEffect(() => {
        checkToken()
        get1Book()
        getBooks()
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
                                <li><a href="/">Maqolalar</a></li>
                                <li><a href="https://t.me/NET_theif" target="_blank">Support</a></li>
                            </ul>}
                            {search && <div className="search">
                                <input className="searchInp" type="text" name="" id="" />
                                <button className="searchBtn">Search</button>
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
                </div>
                <div className="all">
                    <div className="left">
                        <img onClick={() => { toggleLink(item._id) }} src={image18} alt="Kitob Rasmi" />
                    </div>
                    <div className="right">
                        <h1>{data.title}</h1>
                        <div className="lb">
                            <h5>{data.author}</h5>
                            <p>|</p>
                            <i><ion-icon name="star-outline"></ion-icon></i>
                            <p>4.1</p>
                        </div>
                        <div className="b">
                            <h3>Sahifa soni: <i>{data.pages}</i></h3>
                        </div>
                        <div className="b">
                            <h3>Chop etilgan: <i>{data.year}</i></h3>
                        </div>
                        <div className="b">
                            <h3>Janr: <i>{data.kbook}</i></h3>
                        </div>
                        <div className="b">
                            <h3>Narxi: <i>{data.price}$</i></h3>
                        </div>
                        <div className="li">
                            <h4>To'liq ma'lumot</h4>
                            <i><ion-icon name="arrow-down-outline"></ion-icon></i>
                            <div className="div"></div>
                        </div>
                        <h4>{data.description}</h4>
                        <p>Mavjud formatlar</p>
                        <div className="al">
                            <div className="l">
                                <div className="l1">
                                    <i><ion-icon name="book-outline"></ion-icon></i>
                                    <h1>Qog'oz kitob</h1>
                                    <p>27 000</p>
                                </div>
                                <div className="l1">
                                    <i><ion-icon name="headset-outline"></ion-icon></i>
                                    <h1>Audio kitob</h1>
                                    <p>6:23 soat</p>
                                </div>
                                <div className="l1">
                                    <i><ion-icon name="phone-portrait-outline"></ion-icon></i>
                                    <h1>Elektron</h1>
                                    <p>pdf, epub</p>
                                </div>
                            </div>
                            <div className="r">
                                <button onClick={addBookToUcer} type="button">Javonga qo'shish</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="b1">
                        <h3 className="bold">Kitobdan iqtiboslar</h3>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <h1>''</h1>
                            <p>Inson bolasi ne kunlarni ko‘rmaydi?!
                                Har bir odam o‘z g‘ami bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib o‘tsa, bu moddiy olam shu kunlarga yetolarmidi?
                                Hayot to‘lqini ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.
                            </p>
                            <div className="ic">
                                {defIc && <i onClick={toggIcon}><ion-icon name="heart-outline"></ion-icon></i>}
                                {redIc && <i onClick={toggIcon} className="red"><ion-icon name="heart-outline"></ion-icon></i>}
                                <i className="ww"><ion-icon name="share-social-outline"></ion-icon></i>
                            </div>
                        </div>
                    </div>
                    <div className="al1">
                        <h1>Sizga yoqishi mumkin</h1>
                        <h2 onClick={() => { window.location.replace('/muallif2') }}>Barchasini ko'rish</h2>
                    </div>
                    <div className="cards cards1">
                        {data1[0]?.title && <div className="card1">
                            <img onClick={() => { toggleLink(data1[0]._id) }} src={image2} alt="Kitob rasmi" />
                            <h1>{data1[0].title}</h1>
                            <div className="c2">
                                <i><ion-icon name="star-outline"></ion-icon></i>
                                <p>4.1</p>
                                <p>-</p>
                                <p>3400 ta fikrlar</p>
                            </div>
                        </div>}
                        {data1[1]?.title && <div className="card1">
                            <img onClick={() => { toggleLink(data1[1]._id) }} src={image2} alt="Kitob rasmi" />
                            <h1>{data1[1].title}</h1>
                            <div className="c2">
                                <i><ion-icon name="star-outline"></ion-icon></i>
                                <p>4.1</p>
                                <p>-</p>
                                <p>3400 ta fikrlar</p>
                            </div>
                        </div>}
                        {data1[2]?.title && <div className="card1">
                            <img onClick={() => { toggleLink(data1[2]._id) }} src={image2} alt="Kitob rasmi" />
                            <h1>{data1[2].title}</h1>
                            <div className="c2">
                                <i><ion-icon name="star-outline"></ion-icon></i>
                                <p>4.1</p>
                                <p>-</p>
                                <p>3400 ta fikrlar</p>
                            </div>
                        </div>}
                        {data1[3]?.title && <div className="card1">
                            <img onClick={() => { toggleLink(data1[3]._id) }} src={image2} alt="Kitob rasmi" />
                            <h1>{data1[3].title}</h1>
                            <div className="c2">
                                <i><ion-icon name="star-outline"></ion-icon></i>
                                <p>4.1</p>
                                <p>-</p>
                                <p>3400 ta fikrlar</p>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookView
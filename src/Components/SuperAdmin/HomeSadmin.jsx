import { useEffect, useRef, useState } from "react";
import axios from "axios";
import config from "../../qwe/config";
import "./sadmin.css"
import "./responsive.css"

function HomeSadmin() {
    const [create, setCreate] = useState(true);
    const [createA, setCreateA] = useState(false);
    const [createAdmin, setCreateAdmin] = useState(false);
    const [createB, setCreateB] = useState(false);
    const [authors, setAuthors] = useState(false);
    const [ucers, setUcers] = useState(false);
    const [admins, setAdmins] = useState(false);
    const [books, setBooks] = useState(false);

    const [authorstab, setAuthorsTab] = useState([]);
    const [ucerstab, setUcersTab] = useState([]);
    const [adminstab, setAdminsTab] = useState([]);
    const [bookstab, setBooksTab] = useState([]);
    const [booksgr, setBooksGr] = useState([]);
    const [image, setImage] = useState("")

    let inp1 = useRef(null)
    let inp2 = useRef(null)
    let inp3 = useRef(null)
    let inp4 = useRef(null)
    let inp5 = useRef(null)
    let inp6 = useRef(null)
    let inp7 = useRef(null)
    let inp8 = useRef(null)
    let imgInp = useRef('')

    const toggleCreate = () => {
        setCreate(true);
        setCreateA(false);
        setCreateB(false);
        setAuthors(false);
        setUcers(false);
        setAdmins(false);
        setCreateAdmin(false)
    };
    const toggleCreateA = () => {
        setCreate(false);
        setCreateA(true);
        setCreateB(false);
        setAuthors(false);
        setUcers(false);
        setAdmins(false);
        setCreateAdmin(false)
    };
    const toggleCreateB = () => {
        setCreate(false);
        setCreateA(false);
        setCreateB(true);
        setAuthors(false);
        setUcers(false);
        setAdmins(false);
        setCreateAdmin(false)
    };
    const toggleAuthors = () => {
        setCreate(false);
        setCreateA(false);
        setCreateB(false);
        setAuthors(true);
        setUcers(false);
        setAdmins(false);
        setCreateAdmin(false)
    };
    const toggleUcers = () => {
        setCreate(false);
        setCreateA(false);
        setCreateB(false);
        setAuthors(false);
        setUcers(true);
        setAdmins(false);
        setCreateAdmin(false)
    };
    const toggleAdmins = () => {
        setCreate(false);
        setCreateA(false);
        setCreateB(false);
        setAuthors(false);
        setUcers(false);
        setAdmins(true);
        setCreateAdmin(false)
    };
    const toggleLogOut = () => {
        let check = confirm('Are you sure you want to leave your account?')
        if (check) {
            window.localStorage.clear('token')
            window.location.replace("/")
        }
    };
    const toggleBooksClose = () => { setBooks(false) }
    const toggleBooksTable = (id) => {
        setBooks(true)
        window.localStorage.setItem("idAuthor", id)
        getAuthorBooks()
    }
    const toggleCrAdmin = () => {
        setCreateAdmin(true)
        setCreate(false);
        setCreateA(false);
        setCreateB(false);
        setAuthors(false);
        setUcers(false);
        setAdmins(false);
    }
    const getAuthorBooks = async () => {
        let res = await axios.get(`${config.url}/routesuperadmin/author/books/${window.localStorage.getItem("idAuthor")}`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        if (res.data.message === "No authorization on this route" || res.data.message === "Token is not defined" || res.data.message === "Token wrong") {
            window.localStorage.clear()
            window.location.replace('/')
        }
        setBooksGr(res.data.data1);
    }
    const gcv = (inp) => { return inp.current.value }
    const getAuthors = async () => {
        let res = await axios.get(`${config.url}/routesuperadmin/authors`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        if (res.data.message === "No authorization on this route" || res.data.message === "Token is not defined" || res.data.message === "Token wrong") {
            window.localStorage.clear()
            window.location.replace('/')
        }
        setAuthorsTab(res.data.ucers);
    }
    const getBooks = async () => {
        let res = await axios.get(`${config.url}/routesuperadmin/books`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        if (res.data.message === "No authorization on this route" || res.data.message === "Token is not defined" || res.data.message === "Token wrong") {
            window.localStorage.clear()
            window.location.replace('/')
        }
        setBooksTab(res.data.ucers);
    }
    const getUcers = async () => {
        let res = await axios.get(`${config.url}/routesuperadmin/ucers`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        if (res.data.message === "No authorization on this route" || res.data.message === "Token is not defined" || res.data.message === "Token wrong") {
            window.localStorage.clear()
            window.location.replace('/')
        }
        setUcersTab(res.data.ucers);
    }
    const getAdmins = async () => {
        let res = await axios.get(`${config.url}/routesuperadmin/admins`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        if (res.data.message === "No authorization on this route" || res.data.message === "Token is not defined" || res.data.message === "Token wrong") {
            window.localStorage.clear()
            window.location.replace('/')
        }
        setAdminsTab(res.data.admin);
    }
    function coverToBase64(e) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setImage(reader.result)
        };
        reader.onerror = error => {
            console.log("Error: ", error);
        };
    }
    const crAuthor = async () => {
        if (gcv(inp1) && gcv(inp2) && gcv(inp3) && gcv(inp4) && gcv(inp5) && gcv(inp6) && gcv(inp7) && imgInp.current.value) {
            let data = {
                image,
                firstName: gcv(inp1),
                lastName: gcv(inp2),
                birth: gcv(inp3),
                death: gcv(inp4),
                country: gcv(inp5),
                bio: gcv(inp6),
                kateg: gcv(inp7),
                books: [],
            }
            let res = await axios.post(`${config.url}/routesuperadmin/crauthor`, data, {
                headers: {
                    authorization: window.localStorage.getItem("token")
                }
            })
            getAuthors()
            alert(res.data.title)

            imgInp.current.value = ''
            inp1.current.value = ''
            inp2.current.value = ''
            inp3.current.value = ''
            inp4.current.value = ''
            inp5.current.value = ''
            inp6.current.value = ''
            inp7.current.value = ''
        } else {
            alert("Complete all inputs...")
        }
    };
    const delAuthor = async (id) => {
        let res = await axios.delete(`${config.url}/routesuperadmin/delauthor?idAuthor=${id}`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        getAuthors()
        alert(res.data.title)
    }
    const crBook = async () => {
        if (gcv(inp1) && gcv(inp2) && gcv(inp3) && gcv(inp4) && gcv(inp5) && gcv(inp6) && gcv(inp7) && gcv(inp8) && imgInp.current.value) {
            let data = {
                image,
                title: gcv(inp1),
                pages: gcv(inp2),
                year: gcv(inp3),
                price: gcv(inp4),
                country: gcv(inp5),
                author: gcv(inp6),
                description: gcv(inp7),
                kbook: gcv(inp8),
            }
            let res = await axios.post(`${config.url}/routesuperadmin/crbook`, data, {
                headers: {
                    authorization: window.localStorage.getItem("token")
                }
            })
            alert(res.data.title)

            imgInp.current.value = ''
            inp1.current.value = ''
            inp2.current.value = ''
            inp3.current.value = ''
            inp4.current.value = ''
            inp5.current.value = ''
            inp6.current.value = ''
            inp7.current.value = ''
        } else {
            alert("Complete all inputs...")
        }
    };
    const crAdmin = async () => {
        if (gcv(inp1) && gcv(inp2) && gcv(inp3) && gcv(inp4) && gcv(inp5)) {
            let data = {
                firstName: gcv(inp1),
                lastName: gcv(inp2),
                phone: gcv(inp3),
                email: gcv(inp4),
                password: gcv(inp5)
            }
            let res = await axios.post(`${config.url}/routesuperadmin/cradmin`, data, {
                headers: {
                    authorization: window.localStorage.getItem("token")
                }
            })
            getAdmins()
            alert(res.data.title)

            inp1.current.value = ''
            inp2.current.value = ''
            inp3.current.value = ''
            inp4.current.value = ''
            inp5.current.value = ''
            inp6.current.value = ''
        } else {
            alert("Complete all inputs...")
        }
    };
    const delAdmin = async (id) => {
        let res = await axios.delete(`${config.url}/routesuperadmin/deladmin?idAdmin=${id}`, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        getAdmins()
        alert(res.data.title)
    }
    const addBookToAuthor = async (id) => {
        let data = {
            idAuthor: `${window.localStorage.getItem("idAuthor")}`,
            idBook: `${id}`
        }
        let res1 = await axios.post(`${config.url}/routesuperadmin/addbook`, data, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        alert(res1.data.message)
        getAuthorBooks()
    }

    useEffect(() => {
        getBooks()
        getAuthors()
        getUcers()
        getAdmins()
    }, [])

    return (
        <>
            <div className="Sadmin">
                <div className="topnav">
                    <h1>KitobUz</h1>
                </div>
                <div className="center1">
                    <div className="leftnav">
                        <h4>Menu</h4>
                        <div onClick={toggleCreate} className="cr">
                            <i><ion-icon name="add-circle-outline"></ion-icon></i>
                            <h1>Create</h1>
                        </div>
                        <div className="divv">
                            <div onClick={toggleCreateA} className="cr">
                                <i><ion-icon name="person-circle-outline"></ion-icon></i>
                                <h1>Create Author</h1>
                            </div>
                            <div onClick={toggleCreateB} className="cr">
                                <i><ion-icon name="book-outline"></ion-icon></i>
                                <h1>Create book</h1>
                            </div>
                        </div>
                        <div onClick={toggleAuthors} className="cr">
                            <i><ion-icon name="person-circle-outline"></ion-icon></i>
                            <h1>Authors</h1>
                        </div>
                        <div onClick={toggleUcers} className="cr">
                            <i><ion-icon name="people-outline"></ion-icon></i>
                            <h1>Ucers</h1>
                        </div>
                        <div onClick={toggleAdmins} className="cr">
                            <i><ion-icon name="lock-closed-outline"></ion-icon></i>
                            <h1>Admins</h1>
                        </div>
                        <div onClick={toggleLogOut} className="cr">
                            <i><ion-icon name="log-out-outline"></ion-icon></i>
                            <h1>LogOut</h1>
                        </div>
                    </div>
                    <div className="rightSide">
                        {createAdmin && <div className="cradmin">
                            <h1>Create new admin</h1>
                            <input ref={inp1} type="text" name="" id="" placeholder="First Name" />
                            <input ref={inp2} type="text" name="" id="" placeholder="Last Name" />
                            <input ref={inp3} type="number" name="" id="" placeholder="Phone" />
                            <input ref={inp4} type="email" name="" id="" placeholder="Email" />
                            <input ref={inp5} type="password" name="" id="" placeholder="********" />
                            <button onClick={crAdmin} type="button">Create</button>
                        </div>}
                        {books && <div className="booktable">
                            <i onClick={toggleBooksClose}><ion-icon name="contract-outline"></ion-icon></i>
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Pages</th>
                                        <th>Year</th>
                                        <th>Price</th>
                                        <th>Country</th>
                                        <th>Author</th>
                                        <th><ion-icon name="contrast-outline"></ion-icon></th>
                                    </tr>
                                </thead>
                                {bookstab.map((item, i) => {
                                    return (
                                        <>
                                            <tbody>
                                                <tr key={i + 1}>
                                                    <td>{i + 1}</td>
                                                    <td>{item.title}</td>
                                                    <td>{item.pages}</td>
                                                    <td>{item.year}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.country}</td>
                                                    <td>{item.author}</td>
                                                    <td><i onClick={() => { addBookToAuthor(item._id) }}><ion-icon name="add-circle-outline"></ion-icon></i></td>
                                                </tr>
                                            </tbody>
                                        </>
                                    )
                                })}
                            </table>
                        </div>}
                        {create && <div className="cards">
                            <div onClick={toggleCreateA} className="card">
                                <i><ion-icon name="person-circle-outline"></ion-icon></i>
                                <h1>Create Author</h1>
                            </div>
                            <div onClick={toggleCrAdmin} className="card">
                                <i><ion-icon name="lock-closed-outline"></ion-icon></i>
                                <h1>Create Admin</h1>
                            </div>
                        </div>}
                        {createA && <div className="author">
                            <div className="l">
                                {image == "" || image == null ? "" : <img src={image} />}
                                <br />
                                <input ref={imgInp} accept="image/*" type="file" onChange={coverToBase64} />
                            </div>
                            <div className="r">
                                <h1>Add author</h1>
                                <input ref={inp1} type="text" name="" id="" placeholder="First Name" />
                                <input ref={inp2} type="text" name="" id="" placeholder="Last Name" />
                                <input ref={inp3} type="number" name="" id="" placeholder="Date of birth" />
                                <input ref={inp4} type="number" name="" id="" placeholder="Date of death" />
                                <input ref={inp5} type="text" name="" id="" placeholder="Country" />
                                <input ref={inp7} type="text" name="" id="" placeholder="Kategoriya" />
                                <input ref={inp6} type="text" name="" id="" placeholder="Bio" />
                                <button onClick={crAuthor} type="button">Create</button>
                            </div>
                        </div>}
                        {createB && <div className="book">
                            <div className="l">
                                {image == "" || image == null ? "" : <img src={image} />}
                                <br />
                                <input ref={imgInp} accept="image/*" type="file" onChange={coverToBase64} />
                            </div>
                            <div className="r">
                                <h1>Add book</h1>
                                <input ref={inp1} type="text" name="" id="" placeholder="Title" />
                                <input ref={inp2} type="number" name="" id="" placeholder="Pages" />
                                <input ref={inp3} type="number" name="" id="" placeholder="Year" />
                                <input ref={inp4} type="number" name="" id="" placeholder="Price" />
                                <input ref={inp5} type="text" name="" id="" placeholder="Country" />
                                <input ref={inp6} type="text" name="" id="" placeholder="Author" />
                                <input ref={inp7} type="text" name="" id="" placeholder="Description" />
                                <input ref={inp8} type="text" name="" id="" placeholder="nasr, nazm" />
                                <button onClick={crBook} type="button">Create</button>
                            </div>
                        </div>}
                        {authors && <div className="authors">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Date of birth</th>
                                        <th>Date of death</th>
                                        <th>Country</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                {authorstab.map((item, i) => {
                                    return (
                                        <>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        {i + 1}
                                                    </th>
                                                    <td>{item.firstName}</td>
                                                    <td>{item.lastName}</td>
                                                    <td>{item.birth}</td>
                                                    <td>{item.death}</td>
                                                    <td>{item.country}</td>
                                                    <td><i onClick={() => { toggleBooksTable(item._id) }}><ion-icon name="add-circle-outline"></ion-icon></i></td>
                                                    <td><i onClick={() => { delAuthor(item._id) }}><ion-icon name="trash-outline"></ion-icon></i></td>
                                                </tr>
                                            </tbody>
                                        </>
                                    )
                                })}
                            </table>
                        </div>}
                        {ucers && <div className="ucers">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                {ucerstab.map((item, i) => {
                                    return (
                                        <>
                                            <tbody>
                                                <tr id={item._id}>
                                                    <th scope="row">
                                                        {i + 1}
                                                    </th>
                                                    <td>{item.firstName}</td>
                                                    <td>{item.lastName}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.email}</td>
                                                </tr>
                                            </tbody>
                                        </>
                                    )
                                })}
                            </table>
                        </div>}
                        {admins && <div className="admins">
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                {adminstab.map((item, i) => {
                                    return (
                                        <>
                                            <tbody>
                                                <tr id={item._id}>
                                                    <th scope="row">
                                                        {i + 1}
                                                    </th>
                                                    <td>{item.firstName}</td>
                                                    <td>{item.lastName}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.email}</td>
                                                    <td><i onClick={() => { delAdmin(item._id) }}><ion-icon name="trash-outline"></ion-icon></i></td>
                                                </tr>
                                            </tbody>
                                        </>
                                    )
                                })}
                            </table>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSadmin
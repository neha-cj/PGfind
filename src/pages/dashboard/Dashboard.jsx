import React, { useContext } from "react";
import "./Dashboard.css";
import logo from "../../images/mypg-logo.png";
import { app, database, storage } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

import { AuthContext } from "../../context";
import { useState } from "react";

import { uploadBytes, getDownloadURL } from "firebase/storage";
import { ref } from "firebase/storage";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  const initialvalue = {
    pg_name: "",
    owner_name: "",
    address: "",
    facilities: "",
    rent: "",
    phone: "",
    photo_url: ""
  };

  const [pg, setPg] = useState(initialvalue);
  const [urlkey, seturlkey] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPg({ ...pg, [name]: value });

  };


  // handle file input changes
  const [file, setFile] = useState(null);

  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
    
  };


  const handleform = () => {
      const PGImageRef = ref(storage, `images/${file.name}`);
      console.log("uploading:");
  
      console.log(file);
      uploadBytes(PGImageRef, file).then((snapshot) => {
        
        
        
        getDownloadURL(PGImageRef)
          .then((url) => {  
            seturlkey(url);
            setPg({ ...pg, photo: url });
            console.log(url);
            
          })
          .catch((error) => {
            console.log(error);
          });
      });

  
    };


  const handleAddDoc = () => {
    const dbInstance = collection(database, "pg");
  
            addDoc(dbInstance, {
              ...pg,
            });

  };


  

// console.log(file);
//   console.log(pg);


  if (user) {
    return (
      <div className="dashboard">
        <div className="nav">
          <div className="nav-left">
            <img src={logo} alt="" />
          </div>
          <div className="nav-right">
            <p>{user.displayName}</p>
            <img src={user.photoURL} alt="" />
          </div>
        </div>
        <div className="dashboard-cont">
          <div className="side-bar"></div>
          <div className="main-cont">


            <div className="card">
              <div className="card-img">
                <img src=""></img>
              </div>
              <div className="card-cont">
                <div className="card-l">
                  <h1>Pg name</h1>
                  <p>address</p>
                  <p>phone number</p>
                  <p>features</p>
                  <h2>price</h2>
                </div>
                <div className="card-r">
                  <img src=""></img>
                  <p>Owner name</p>
                </div>
              </div>
            </div>

            
          </div>
          <div className="right-bar">
            <div className="addpg">
              <h2>Add Your PG</h2>
              <div>
                <label>PG Name:</label> <br />
                <input
                  type="text"
                  value={pg.pg_name}
                  name="pg_name"
                  onChange={handleChange}
                  id="name"
                />
                <br />
                <label> Image:</label> <br />
                <input
                  type="file"
                  onChange={(event) => handleFileInputChange(event)}
                  accept="image/*"
                />
                <br />
                <button onClick={handleform} type="button">
                  Upload
                </button>
                <br />
                <br />
                <label>Address:</label> <br />
                <input
                  id="address"
                  name="address"
                  value={pg.address}
                  onChange={handleChange}
                />
                <br />
                <label>Facilities:</label> <br />
                <input
                  type="text"
                  id="facilities"
                  name="facilities"
                  value={pg.facilities}
                  onChange={handleChange}
                />
                <br />
                <label>Rent:</label> <br />
                <input
                  type="number"
                  id="rent"
                  name="rent"
                  value={pg.rent}
                  onChange={handleChange}
                />
                <br />
                <label>Phone Number:</label> <br />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={pg.phone}
                  onChange={handleChange}
                />
                <br />
                <button onClick={handleAddDoc} type="button">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/dog_listing.css";

function DogListing() {
  const [dogs, setDogs] = useState([]);
  const [activeDog, setActiveDog] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/dogs")
      .then(res => setDogs(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeDog ? "hidden" : "auto";
  }, [activeDog]);

  return (
    <div className="dog-page">
      <nav className="navbar">
        <div className="nav-left">
          <ul>
            <li className="brand">WAGING TALES🐶</li>
            <li><Link to="/home">Home</Link></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </div>
        <div className="nav-right">
          <Link to="/signin"><button>SIGN IN</button></Link>
        </div>
      </nav>

      <div className="dog-container">
        {dogs.map(dog => (
          <div className="dog-card" key={dog._id || dog.id}>
            <img className="card-img" src={dog.image} alt={dog.name} />
            <div className="card-body">
              <h3>{dog.name} – {dog.breed}</h3>
              <p>{dog.description}</p>
            </div>
            <button onClick={() => setActiveDog(dog)}>
              More details
            </button>
          </div>
        ))}
      </div>

      {activeDog && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-btn" onClick={() => setActiveDog(null)}>
              ×
            </button>

            <h2>{activeDog.name}</h2>
            <p>{activeDog.details}</p>

            <Link to="/form">
              <button className="adopt-btn">Start Adoption Process</button>
            </Link>
          </div>
        </div>
      )}

      <footer id="contacts">
        <p>📞 +91 98765 43210</p>
        <p>📧 support@wagingtales.org</p>
        <p>© 2025 Waging Tales</p>
      </footer>
    </div>
  );
}

export default DogListing;

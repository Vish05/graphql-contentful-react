import { Link } from 'react-router-dom';

export default function MainNavigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link to="/" className="nav-link active">Mobile Store</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutus" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/shop" className="nav-link">
                                Shop
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

import Input from '../search/Input';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Home
                </a>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
                </div>
                <Input />
                <button className="btn btn-danger ms-2 me-2">Log out</button>
            </div>
        </nav>
    );
}

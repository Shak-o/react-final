import Header from './Header';
import Input from '../search/Input';
import NavBar from './NavBar';

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <div
                className="row"
                style={{ marginTop: 10, height: window.innerHeight }}>
                <Header value={{ name: 'Not Started' }} />
                <Header value={{ name: 'In Progress' }} />
                <Header value={{ name: 'Ready' }} />
                <Header value={{ name: 'Closed' }} />
            </div>
        </div>
    );
}

import Header from './Header';
import styles from './header.module.css';
export default function HomePage() {
    const check = () => {
        console.log('click');
    };
    return (
        <div className="container">
            <div className="row" style={{ marginTop: 10 }}>
                <div id="not-started" className="col" onClick={check}>
                    <div
                        className={styles.column}
                        style={{ height: window.innerHeight }}>
                        <Header value={{ name: 'Not Started' }} />
                    </div>
                </div>
                <div id="in-progress" className="col">
                    <Header value={{ name: 'In Progress' }} />
                </div>
                <div id="closed" className="col">
                    <Header value={{ name: 'Closed' }} />
                </div>
            </div>
        </div>
    );
}

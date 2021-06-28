import { useForm } from 'react-hook-form';
import styles from './popup.module.css';
export default function TaskForm(props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const formStyle = {
        height: '40vh',
        width: '40vh',
        backgroundColor: 'grey',
        position: 'absolute',
        marginBottom: '100%',
        display: 'block',
    };

    const onSubmit = (data) => console.log(data);
    return props.trigger ? (
        <div>
            <form className={styles.popup}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            {props.children}
        </div>
    ) : (
        ''
    );
}

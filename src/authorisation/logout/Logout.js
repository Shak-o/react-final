import { Redirect } from 'react-router-dom';

export default function Logout() {
    async function removeToken() {
        await localStorage.removeItem('token');
        window.location.reload();
    }
    return (
        <div>
            {removeToken()}
            <Redirect to="/" />
        </div>
    );
}

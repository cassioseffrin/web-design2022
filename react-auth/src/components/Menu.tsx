import {

    Link,

    Outlet,
} from 'react-router-dom';

export function Menu() {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, backgroundColor: 'blue' }} >
                {/* <StatusLogin /> */}
                <ul>
                    <li>
                        <Link to="/">paginas publicas</Link>
                    </li>
                    <li>
                        <Link to="/protected">paginas privadas</Link>
                    </li>
                </ul>
            </div>
            <div style={{ flex: 2 }} >
                <Outlet />
            </div>
        </div>
    );
}
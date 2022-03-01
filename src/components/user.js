import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from "axios";
function User() {
    const [user, setUser] = useState({})
    let { id } = useParams()

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users/' + id)
            .then((result) => setUser(result.data))
    }, [])
    return (
        <>
            <main>
                <h2>Welcome to the {id} Userpage!</h2>
                <p>You can do this, I believe in you.</p>
                <p>
                    <code>
                    {JSON.stringify(user)}
                    </code>
                </p>
            </main>
            <nav>
                <Link to="/users">Users</Link>
            </nav>
        </>
    );
}
export default User
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then((result) => setUsers(result.data))
    }, [])
    return (
        <>
            <ul>
                {users.map((user) =>
                    <li key={user.id} >
                        <NavLink activeStyle={{color:'red'}} to={`/user/${user.id}`}> {user.name}</NavLink>
                    </li>
                )}

            </ul>
        </>
    )
}
export default Users
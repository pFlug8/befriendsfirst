
import { Link } from 'react-router-dom';


const Landing = () => {
    return (
        <div>
            <h1>I'm the first page</h1>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </div>
    )
}

export default Landing;
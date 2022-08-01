import Header from "../components/Header"
import { useParams } from 'react-router-dom'

function Home(props){

    let { userid, username } = useParams();

    return (
        <div className="Home">
            <Header />
            <h1>hello from the homepage {userid} {username}</h1>
        </div>
    )

}

export default Home
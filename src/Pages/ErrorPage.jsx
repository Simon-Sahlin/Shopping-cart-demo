import { Link } from 'react-router-dom';


function ErrorPage(){
    return(
        <>
            <h1>Seems like you are lost, Click <Link to="/">here</Link> to return home.</h1>
        </>
    )
}
export default ErrorPage;
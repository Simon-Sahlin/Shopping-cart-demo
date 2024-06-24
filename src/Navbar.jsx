import { Link } from "react-router-dom";

function Navbar({page}){
    return(
        <nav>
            <h1>Somin's Store</h1>
            <ul>
                <li>
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>shopping</title><path fill="currentColor" d="M12,13A5,5 0 0,1 7,8H9A3,3 0 0,0 12,11A3,3 0 0,0 15,8H17A5,5 0 0,1 12,13M12,3A3,3 0 0,1 15,6H9A3,3 0 0,1 12,3M19,6H17A5,5 0 0,0 12,1A5,5 0 0,0 7,6H5C3.89,6 3,6.89 3,8V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V8C21,6.89 20.1,6 19,6Z" /></svg>
                        <p>{page=="index" ? <em>Store</em> : "Store"}</p>
                    </Link>
                </li>
                <li>
                    <Link to="Cart">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart</title><path fill="currentColor" d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" /></svg>
                        <p>{page=="Cart" ? <em>Cart</em> : "Cart"}</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;
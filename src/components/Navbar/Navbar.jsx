
export default function Navbar({ handleCartClick, count }) {


    return (
        <div className="navbar bg-gray-500 relative">
            <div className="flex-1">
                <a href=""><img className="h-14 w-24 rounded-md" src="Your paragraph text.gif" alt="logo" /></a>
            </div>
            <div className="hidden md:flex flex-col md:flex-row md:mx-6">
                <a className="my-2 text-gray-900 transition-colors duration-300 transform md:mx-4 md:my-0" href="#">Home</a>
                <a className="my-2 text-gray-900 transition-colors duration-300 transform md:mx-4 md:my-0" href="#">Shop</a>
                <a className="my-2 text-gray-900 transition-colors duration-300 transform md:mx-4 md:my-0" href="#">Contact</a>
                <a className="my-2 text-gray-900 transition-colors duration-300 transform md:mx-4 md:my-0" href="#">About</a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <button onClick={handleCartClick} className="w-7"><img src="/shopping-cart.png" alt="cart-icon" /></button>
                            <sup>{count}</sup>
                        </div>
                    </label>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Profile</a></li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

import { useData } from "../DataContext"; // Import the custom hook

export default function Header() {
    const data = useData();

    return (
        <header className="flex-column container">
            <div className="shipping__promo">{data.header.shipping}</div>
            <div className="header__hat flex-row">
                <div className="logo__small">
                    <svg
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="120"
                        height="32"
                        viewBox="0 0 120 32"
                    >
                        <rect
                            id="Clear_space"
                            width="120"
                            height="32"
                            fill="none"
                        ></rect>
                        <path
                            id="Logo_ratio"
                            d="M0,11.651V10.511H3.994v1.45a1.334,1.334,0,0,0,1.494,1.346A1.3,1.3,0,0,0,6.932,12.3a1.833,1.833,0,0,0-.026-1.113C6.133,9.243.851,8.363.18,5.333a5.347,5.347,0,0,1-.025-2.02C.567.88,2.705,0,5.359,0c2.113,0,5.025.492,5.025,3.754V4.816H6.674V3.884A1.275,1.275,0,0,0,5.282,2.537a1.25,1.25,0,0,0-1.365,1.01,2.021,2.021,0,0,0,.026.777c.437,1.734,6.081,2.667,6.7,5.8a6.943,6.943,0,0,1,.025,2.46C10.307,15.068,8.091,16,5.412,16,2.6,16,0,14.99,0,11.651ZM48.392,11.6V10.46h3.943v1.424A1.312,1.312,0,0,0,53.8,13.23a1.286,1.286,0,0,0,1.443-.984,1.759,1.759,0,0,0-.025-1.088c-.748-1.915-5.979-2.8-6.648-5.825a5.215,5.215,0,0,1-.026-1.994C48.959.932,51.1.052,53.7.052c2.088,0,4.973.518,4.973,3.728V4.816H54.989V3.91a1.268,1.268,0,0,0-1.365-1.346,1.2,1.2,0,0,0-1.34.984,2.017,2.017,0,0,0,.025.777c.412,1.734,6,2.641,6.623,5.747a6.806,6.806,0,0,1,.025,2.434c-.361,2.486-2.551,3.392-5.2,3.392C50.97,15.9,48.392,14.887,48.392,11.6Zm14.121.545a5.876,5.876,0,0,1-.025-.985V.44H66.25V11.495a4.111,4.111,0,0,0,.025.57,1.468,1.468,0,0,0,2.835,0,3.97,3.97,0,0,0,.026-.57V.44H72.9V11.158c0,.285-.026.829-.026.985-.257,2.8-2.448,3.7-5.179,3.7S62.771,14.938,62.513,12.143Zm30.974-.156A7.808,7.808,0,0,1,93.435,11V4.712c0-.259.025-.725.051-.985C93.821.932,96.063.052,98.717.052c2.629,0,4.947.88,5.206,3.676a7.185,7.185,0,0,1,.025.985V5.2h-3.762V4.376a3.1,3.1,0,0,0-.051-.57,1.553,1.553,0,0,0-2.964,0,3.088,3.088,0,0,0-.051.7V11.34a4.17,4.17,0,0,0,.026.57A1.472,1.472,0,0,0,98.717,13a1.406,1.406,0,0,0,1.52-1.087,2.09,2.09,0,0,0,.026-.57V9.165h-1.52V6.99H104V11a7.674,7.674,0,0,1-.052.984c-.257,2.718-2.6,3.676-5.231,3.676S93.744,14.705,93.487,11.987ZM41.049,15.378l-.1-13.825L38.369,15.378H34.607L32.055,1.553l-.1,13.825H28.242L28.551.466h6.056l1.881,11.651L38.369.466h6.055l.335,14.912Zm-19.79,0L19.249,1.553,17.187,15.378H13.168L15.9.466h6.623l2.732,14.912Zm62.977-.155L80.5,2.822l.206,12.4H77.046V.466h5.514l3.5,12.013L85.859.466h3.685V15.224Z"
                            transform="translate(8 8)"
                        ></path>
                    </svg>
                </div>
                <nav className="header__nav flex-row">
                    <a href="#" className="header__search">
                        <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 96 96"
                            id="search-desktop"
                            data-di-rand="1724737098271"
                            role="presentation"
                            aria-hidden="true"
                            tabIndex="-1"
                        >
                            <path d="M40.581 4.09c20.126 0 36.5 16.374 36.5 36.5a36.325 36.325 0 01-7.963 22.733l22.8 22.948-5.674 5.639-22.767-22.913a36.327 36.327 0 01-22.896 8.093c-20.126 0-36.5-16.374-36.5-36.5s16.374-36.5 36.5-36.5zm0 8c-15.715 0-28.5 12.785-28.5 28.5s12.785 28.5 28.5 28.5 28.5-12.785 28.5-28.5-12.785-28.5-28.5-28.5z"></path>
                        </svg>
                    </a>
                    <a href="#" className="header__cart">
                        <svg
                            className="icon"
                            id="cart-bold"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 96 96"
                            role="presentation"
                            aria-hidden="true"
                            tabIndex="-1"
                            data-di-rand="1724737098271"
                        >
                            <path d="M72.848 70.25c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11 4.925-11 11-11zm-35 0c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11c0-6.074 4.926-11 11-11zm35 7a4 4 0 10.002 8.001 4 4 0 00-.002-8.001zm-35 0a4 4 0 100 8 4 4 0 000-8zM13.892 3.75c2.287 0 4.376 1.55 5.058 3.72l.064.22 2.97 11.187h68.128a4.727 4.727 0 014.661 5.786l-.048.2-9.559 36.291c-.583 2.216-2.618 3.842-4.894 3.944l-.228.005H30.06c-2.287 0-4.377-1.55-5.06-3.72l-.063-.219-13.124-49.413-10.7.006-.004-8 12.782-.007zm72.03 23.127H24.108l8.027 30.226H77.96l7.962-30.226z"></path>
                        </svg>
                    </a>
                    <a href="#" className="header__profile">
                        <svg
                            className="icon"
                            viewBox="0 0 96 96"
                            id="user-guest"
                            xmlns="http://www.w3.org/2000/svg"
                            data-di-rand="1724737098271"
                            role="presentation"
                            aria-hidden="true"
                            tabIndex="-1"
                        >
                            <path d="M48 50c17.346 0 32 14.221 32 31.054V89c0 2.757-2.243 5-5 5H21c-2.757 0-5-2.243-5-5v-7.946C16 64.221 30.654 50 48 50zm0 8c-12.785 0-24 10.773-24 23.054V86h48v-4.946C72 68.773 60.785 58 48 58zm-.002-56c12.133 0 22.003 9.87 22.003 22.001C70 36.131 60.13 46 47.998 46c-12.13 0-21.997-9.869-21.997-21.999C26 11.87 35.867 2 47.998 2zm0 8c-7.718 0-13.997 6.281-13.997 14.001C34 31.72 40.28 38 47.998 38 55.718 38 62 31.72 62 24.001 62 16.281 55.719 10 47.998 10z"></path>
                        </svg>
                    </a>
                    <a href="#" className="burger">
                        <svg
                            className="icon"
                            id="menu-bold"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 96 96"
                            role="presentation"
                            aria-hidden="true"
                            tabIndex="-1"
                            data-di-rand="1724737098271"
                        >
                            <path d="M83 70v8H13v-8h70zm0-26v8H13v-8h70zm0-26v8H13v-8h70z"></path>
                        </svg>
                    </a>
                </nav>
            </div>
        </header>
    );
}

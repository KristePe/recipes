import {useRef} from 'react';
import {Link} from "react-router-dom"


const Toolbar = ({favorites}) => {
    return (
        <div className="toolbar space-around d-flex   ">

            <Link to="/ ">All recipes</Link>
            <Link to="/create">Create recipe</Link>
            <Link to="/favorites">Favorites</Link>
        </div>
    );
};

export default Toolbar;
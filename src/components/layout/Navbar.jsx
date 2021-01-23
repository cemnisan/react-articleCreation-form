import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props){
    let resumeData= props.resumeData
    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {
                            resumeData.navbar.map(items=>{
                                const {slug,item} = items
                                return(
                                    <li className="nav-item active" key={item}>
                                        <Link className="nav-link" to={`/${slug}`}>{item}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
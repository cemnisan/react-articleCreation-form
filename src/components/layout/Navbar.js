import React from 'react';
import resumeData from '../../data/resumeData';

function Navbar(props){
    return(
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <a class="navbar-brand" href="/">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        {
                            resumeData.navbar.map(item=>{
                                return(
                                    <li class="nav-item active">
                                        <a class="nav-link" href="/">{item}</a>
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
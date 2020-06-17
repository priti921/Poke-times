import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Nav = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    return (
        <nav className='nav-wrapper  red'>
            <div className='container'>
                <Link className='brand-logo' to="/">Poke'Times</Link>
                <ul className='right'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Nav);
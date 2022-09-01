import { Fragment } from 'react';
import {Outlet,Link} from 'react-router-dom'
import{ReactComponent as CrownIcon} from '../../assets/crown.svg'

import './navigation.styles.scss';

const Navigation = () =>{
    return(
        <Fragment>
            <div className="contaner">
                <div className="navigation">
                    <Link className='logo-container' to='/'>
                    <CrownIcon />
                    </Link>
                    <div className="nav-links-container">
                        <Link className='nav-link' to='/shop'>Shop</Link>
                        <Link className='nav-link' to='/contact'>contact</Link>
                        <Link className='nav-link' to='/auth'>sign in</Link>
                        <Link className='nav-link' to='/cart'>cart</Link>
                    </div>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}
export default Navigation;
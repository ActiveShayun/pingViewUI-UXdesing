import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonNav from './button/ButtonNav';

const Navbar = () => {
    const deskTopMenu = <>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Portfolio</NavLink>
        <NavLink>Blog</NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm w-full">
                <div className='flex justify-between gap-4 w-full'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                             {deskTopMenu}
                            </ul>
                        </div>
                        <a className="uppercase cursor-pointer text-3xl font-bold">
                            devlop.me</a>
                    </div>
                    {/* deskTopMenu section */}
                    <div className='flex justify-between items-center gap-3'>
                        <div className="hidden lg:flex">
                            <ul className="menu-horizontal px-1 flex justify-between items-center gap-5">
                                {deskTopMenu}
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <ButtonNav text={'Start Project'} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
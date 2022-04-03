import React from 'react';
import './CustomLink.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div className='custom-nav'>
            <Link
                // style={{ textDecoration: match ? "underline" : "none" }}
                style={{ color: match ? 'orange' : 'blue' }}
                to={to}
                {...props}>
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;
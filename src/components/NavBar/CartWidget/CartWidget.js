import React from 'react';
import { Link } from 'react-router-dom';

export default function CartWidget() {
    return (
        <>
            <Link to='../cart'>
                <i class="fas fa-shopping-cart"></i>
            </Link>
        </>
    )
}

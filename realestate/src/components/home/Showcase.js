import React from 'react';
import Search from '../forms/Search';

export default function Showcase() {
    return (
        <section id='showcase'>
            <div className='container text-center'>
                <div className='home-search =-5'>
                    <div className='overlay p-5'>
                        <h1 className='display-4 mb-4'>Property Searching Just Got So Easy</h1>
                        <p className='lead'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quas, asperiores eveniet vel nostrum magnam voluptatum tempore! Consectetur, id commodi!</p>
                        <Search />
                    </div>
                </div>
            </div>
        </section>
    );
};
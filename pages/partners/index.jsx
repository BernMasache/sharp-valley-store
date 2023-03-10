import React from 'react';
import PartnersComponet from '../../components/widgets/partners';
import Partners from '../../data/partners';

function index(props) {
    return (
        <div>
            <PartnersComponet partners={Partners}/>
        </div>
    );
}

export default index;
import React, { useEffect, useState } from 'react';
import {getData} from '../../services/services';

import './Authors.css'

export const Authors = () => {

    let [authors, setAuthors] = useState([]);

    useEffect(() => {
        getData()
            .then(response => console.log('from authors page',response))
    }, [])

    return (
        <div>
            <h5>AUTHORS </h5>
        </div>
    )
}

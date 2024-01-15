import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../sass/detail.scss'

const Detail = () => {
    const {id} = useParams()
    const [detail, setDetail] = useState([])
    useEffect(() => {
        fetch("http://localhost:9000/" + id)
            .then((res) => res.json())
            .then((api) => setDetail(api))

    }, [id])

    return (
        <div className='detail'>
            <img width={600} src={detail.img} alt="" />
            <div>
                <h2>{detail.name}</h2>
                <h3>{detail.price}</h3>
                <p>{detail.category}</p>
                <Link to={'/'}>Back</Link>
            </div>

        </div>
    )
}

export default Detail
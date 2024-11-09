import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Reply = () => {
    const {id} = useParams()
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const Mails = useSelector(state => state.mail.mail)
    const [datas, setData] = useState('');

    
    return (
        <div></div>
    )
}

export default Reply
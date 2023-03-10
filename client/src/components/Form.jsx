import React, { useState, useEffect } from 'react'
import "./Form.css";
import { motion } from "framer-motion";
import Axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';

function Form() {

    const [Data, setData] = React.useState({
        name: '',
        email: '',
        type: '',
        message: ''
    })

    const [isLoading, setisLoading] = useState(false)

    const [isSent, setisSent] = useState(false)

    const handleInput = async (e) => {
        setData({ ...Data, [e.target.name]: e.target.value })
    }

    const [Render, setRender] = useState("")

    const reRender = () => {
        setRender("Rendered!")
        setTimeout(()=>{
            setisLoading(false)
            setisSent(true)
        }, 1500)
    }

    useEffect(() => {
        handleForm()
        // eslint-disable-next-line
    }, [])

    const handleForm = async (e) => {

        e.preventDefault()

        if (Data.name !== '' && Data.email !== '' && Data.message !== '' && Data.type !== '') {

            console.log(Data)

            const givenURL = 'http://localhost:5000/feedback'

            const res = await Axios.post(givenURL, Data)

            console.log(res);

            setisLoading(true)

            if (res.data.message || res.status === 200) {
                reRender()
                // setisLoading(false)
                // setisSent(true)
            }
        }
    }

    return (
        <>
            <motion.form
                method='POST'
                onSubmit={handleForm}
                className="form"
                initial={{
                    x: '-100vw',
                    opacity: 0.25
                }}
                animate={
                    !isSent ?
                        {
                            x: 0,
                            opacity: 1,
                        } :
                        {
                            x: '100vw',
                            opacity: 0.25,
                        }
                }
                transition={{
                    type: 'spring',
                    delay: 1,
                }}
            >
                <div className="f1">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder='Enter your Name' required onChange={handleInput} />
                </div>
                <div className="f2">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Enter your Email' required onChange={handleInput} />
                </div>
                <div className="f3">
                    <label htmlFor="type">Type</label>
                    <select name="type" defaultValue={'DEFAULT'} required onChange={handleInput}>
                        <option value='DEFAULT' disabled>Select Type</option>
                        <option value="feedback">Feedback</option>
                        <option value="complaint">Complaint</option>
                    </select>
                </div>
                <div className="f4">
                    <label htmlFor="message" required onChange={handleInput}>Message</label>
                    <textarea name="message" style={{ resize: 'none' }} cols="30" rows="10" required onChange={handleInput}></textarea>
                </div>
                <motion.button
                    animate={
                        isSent ? {
                            backgroundColor: 'gray'
                        } : ''}
                    whileHover={
                        {
                            scale: 1.05,
                            cursor: 'pointer'
                        }
                    }
                    whileTap={{
                        scale: 0.9,
                        backgroundColor: 'rgb(106,90,205)'
                    }}
                    type='submit'
                    disabled={isSent}
                >
                    {
                        isLoading ? <CircularProgress size={23}/> : isSent ? "Thanks for Feedback!" : 'Send'
                        // isLoading && (<CircularProgress/>)
                    }
                    {/* Send */}
                </motion.button>
            </motion.form>

        </>
    )
}

export default Form
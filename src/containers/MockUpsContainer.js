import React, {useState} from 'react'
import {useGetApi, usePostApi} from '../lib/ProjectApi'
import MockUps from '../components/MockUps'
import axios from 'axios';

const AUTHURL = "https://lovemire.com/auth";

const MockUpsContainer = (props) => {

    const [loading, mockups] = useGetApi(AUTHURL + '/mockup')

    const [feedbackPostMessage, setPostMessage] = useState("")

    const handleNewFeedback = (payload) => {

        axios.post(AUTHURL + '/feedback', payload)
            .then ( r => {
                if (r.status === 200) {
                    setPostMessage("Saved!")
                } else {
                    setPostMessage("Error")
                }
            })
            .catch ( e => setPostMessage("Error"))
    }

    return (
        <>
            {loading && <p>loading</p>}
            {!loading && <MockUps 
                data={mockups}
                submitText={feedbackPostMessage}
                feedbackSubmit={ (p) => handleNewFeedback(p) } {...props} />}
        </>
    )
}

export default MockUpsContainer
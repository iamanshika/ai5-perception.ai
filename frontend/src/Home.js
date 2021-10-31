import { Dialog} from '@headlessui/react'
import React, { useState } from 'react';

function Home() {
    // const [recordingstate, setrecordingstate] = useState(False);
    // function recording(){
    //     console.log('speack')
    //     return setrecordingstate(!recordingstate)
    // }
    
    return (
        <div className="h-3/4 w-6/12 bg-gray-100 shadow">
            <h1>Welcome to Perception AI</h1>
            {/* <button className="box bg-red-100" onClick={recording}>speak</button> */}
        </div>
    )
}

export default Home

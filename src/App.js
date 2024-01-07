import { MdBrightness7 } from "react-icons/md";
// g
import { LuSettings2 } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa";
import { useState } from 'react'
import Status from './components/StatusComponent/status'
import './App.css'
import User from './components/UserComponent/user'
import Priority from './components/PriorityComponent/priority'
import { MdNightlight } from "react-icons/md";

export default function App() {
    const [slider, setSlider] = useState(false)
    const [select, setSelect] = useState('')
    const [night, setNight] = useState(false)

    let clickNight = () => {
        document.getElementById('h').classList.toggle('mClass')
        document.getElementById('main').classList.toggle('mainClass')
        document.getElementById('b').classList.toggle('mClass')
        setNight(!night)
    }

    let sl = () => {
        document.getElementById('h').addEventListener('click', () => setSlider(false))
        document.getElementById('main').addEventListener('click', () => setSlider(false))
        // document.getElementById('b').addEventListener('click', () => setSlider(true))
    }
    setTimeout(() => sl(), 100)

    return <>
        <section id="h" >
            <div className="container-fluid header">
                <div className="row">
                    <div className="col-lg-3">
                        <button className="btn btn-sm btn-outline-dark" id="b" onClick={()=>setSlider(!slider)}><LuSettings2 /> Display <FaAngleDown /></button>
                    </div>
                    <div className="col-lg-3">
                        {night ? <div className="nightEffect" onClick={(e) => clickNight()}><MdBrightness7 /></div> : <div className="nightEffect" onClick={() => clickNight()}><MdNightlight /></div>}
                    </div>
                </div>
                <br />
            </div>
        </section>

        <section>
            {slider ? <div className='dropBox container' id="d">
                <div className='row group'>
                    <div className="col-lg-2" style={{ display: 'flex', color: 'black' }}>
                        <p>Grouping</p>
                        &nbsp;
                        <select className='btn btn-sm btn-outline-dark' id="o" onChange={(e) => { setSelect(e.target.value) }} value={select}>
                            <option>Status</option>
                            <option>User</option>
                            <option>Priority</option>
                        </select>
                    </div>
                </div>
            </div> : ''}
        </section>

        <main className='mainBlock' id="main">
            {select == 'Status' ? <><Status value={night} /></> : <>
                {select == 'User' ? <><User value={night} /></> : <>
                    {select == 'Priority' ? <><Priority /></> : <><Status /></>}
                </>}
            </>}
        </main>
    </>
}

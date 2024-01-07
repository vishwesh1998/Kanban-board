import {useEffect, useState} from 'react'
import { PiCellSignalX } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { LuSignalLow } from "react-icons/lu";
import { LuSignalMedium } from "react-icons/lu";
import { LuSignalHigh } from "react-icons/lu";
import { LuSignal } from "react-icons/lu";


export default function Status(props){
    const [npData, setNPData] = useState('')
    const [lowData, setLowData] = useState('')
    const [mediumData, setMediumData] = useState('')
    const [highData, setHighData] = useState('')
    const [urgentData, setUrgentData] = useState('')

   const data = async () =>{
        const res = await fetch('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers') 
        const value = await res.json()
        let nopriorityData = value.tickets.filter(obj=>obj.priority==0)
        setNPData(nopriorityData)
        let lData = value.tickets.filter(obj=>obj.priority==1)
        setLowData(lData)
        let mData = value.tickets.filter(obj=>obj.priority==2)
        setMediumData(mData)
        let hData = value.tickets.filter(obj=>obj.priority==3)
        setHighData(hData)
        let uData = value.tickets.filter(obj=>obj.priority==4)
        setUrgentData(uData)
    }

    useEffect(()=>{
        data()
    },[])
    

    return  <section id='parent'>
    <div className="container-fluid status">
        <div className="row" style={{justifyContent:'space-between'}}>
            <div className="col-lg-2">
                <h6><PiCellSignalX/> No Priority <span style={{marginLeft:'14px'}}><FiPlus/>&nbsp;<BsThreeDots/></span></h6>
                <div className='row'>
                {npData==''?<></>:npData.map(obj=><div className='col-lg-12 backlogBlock'>
                    <p>{obj.id}</p>
                    <h6>{obj.title}</h6>
                    <p style={{border:'0.1px solid grey', borderRadius:'7px', borderWidth:'0.01px', width:'8rem', fontSize:'11px'}}>🟢 Feature Request</p>
                </div>)}
                </div>
                </div>
            <div className="col-lg-2">
            <h6><LuSignalLow/> Low <span style={{marginLeft:'14px'}}><FiPlus/>&nbsp;<BsThreeDots/></span></h6>
                <div className='row'>
                {lowData==''?<></>:lowData.map(obj=><div className='col-lg-12 backlogBlock'>
                    <p>{obj.id}</p>
                    <h6>{obj.title}</h6>
                    <p style={{border:'0.1px solid grey', borderRadius:'7px', borderWidth:'0.01px', width:'8rem', fontSize:'11px'}}>🟢 Feature Request</p>
                </div>)}
                </div>
            </div>
            <div className="col-lg-2">
            <h6><LuSignalMedium/> Medium <span style={{marginLeft:'14px'}}><FiPlus/>&nbsp;<BsThreeDots/></span></h6>
                <div className='row'>
                {mediumData==''?<></>:mediumData.map(obj=><div className='col-lg-12 backlogBlock'>
                    <p>{obj.id}</p>
                    <h6>{obj.title}</h6>
                    <p style={{border:'0.1px solid grey', borderRadius:'7px', borderWidth:'0.01px', width:'8rem', fontSize:'11px'}}>🟢 Feature Request</p>
                </div>)}
                </div>
            
            </div>
            <div className="col-lg-2">
            <h6><LuSignalHigh/> High <span style={{marginLeft:'14px'}}><FiPlus/>&nbsp;<BsThreeDots/></span></h6>
                <div className='row'>
                {highData==''?<></>:highData.map(obj=><div className='col-lg-12 backlogBlock'>
                    <p>{obj.id}</p>
                    <h6>{obj.title}</h6>
                    <p style={{border:'0.1px solid grey', borderRadius:'7px', borderWidth:'0.01px', width:'8rem', fontSize:'11px'}}>🟢 Feature Request</p>
                </div>)}
                </div>
            </div>
            <div className="col-lg-2">
            <h6><LuSignal/> Urgent <span style={{marginLeft:'14px'}}><FiPlus/>&nbsp;<BsThreeDots/></span></h6>
                <div className='row'>
                {urgentData==''?<></>:urgentData.map(obj=><div className='col-lg-12 backlogBlock'>
                    <p>{obj.id}</p>
                    <h6>{obj.title}</h6>
                    <p style={{border:'0.1px solid grey', borderRadius:'7px', borderWidth:'0.01px', width:'8rem', fontSize:'11px'}}>🟢 Feature Request</p>
                </div>)}
                </div>
              </div>
        </div>
    </div>
</section>
}
import {useEffect, useState} from 'react'
import { GoDot } from "react-icons/go";
import { TbCircleDotted } from "react-icons/tb";
import { FiPlus } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { FcCancel } from "react-icons/fc";
import './status.css'

export default function Status(){
    const [backlogData, setBacklogData] = useState('')
    const [todolistData, setTodolistData] = useState('')
    const [progData, setProgData] = useState('')
    const [dneData, setDneData] = useState('')
    const [cancelledData, setCancelledData] = useState('')

   const data = async () =>{
        const res = await fetch('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers') 
        const value = await res.json()
        let backData = value.tickets.filter(obj=>obj.status=='Backlog')
        setBacklogData(backData)
        let todoData = value.tickets.filter(obj=>obj.status=='Todo')
        setTodolistData(todoData)
        let progressData = value.tickets.filter(obj=>obj.status=='In progress')
        setProgData(progressData)
        let doneData = value.tickets.filter(obj=>obj.status=='Done')
        setDneData(doneData)
        let cncelledData = value.tickets.filter(obj=>obj.status=='Cancelled')
        setCancelledData(cncelledData)
    }

    useEffect(()=>{
        data()
        },[])
    
    return  <section>
    <div className="container-fluid status">
        <div className="row" style={{justifyContent:'space-between'}}>
            <div className="col-lg-2">
                <h6><TbCircleDotted/> Backlog <span style={{marginLeft:'14px'}}><FiPlus/>&nbsp;<BsThreeDots/></span></h6>
                <div className='row'>
                {backlogData==''?<></>:backlogData.map(obj=><div className='col-lg-12 backlogBlock' id='crd2'>
                    <p>{obj.id}</p>
                    <h6>{obj.title}</h6>
                    <p style={{border:'0.1px solid grey', borderRadius:'7px', borderWidth:'0.01px', width:'8rem', fontSize:'11px'}}>🟢 Feature Request</p>
                </div>)}
                </div>
                </div>
            <div className="col-lg-2 name">
            <h6><GoDot/> Todo <span style={{marginLeft:'14px'}}><FiPlus/>&nbsp;<BsThreeDots/></span></h6>
                <div className='row'>
                {todolistData==''?<></>:todolistData.map(obj=><div className='col-lg-12 backlogBlock' id='t'>
                    <p>{obj.id}</p>
                    <h6>{obj.title}</h6>
                    <p style={{border:'0.1px solid grey', borderRadius:'7px', borderWidth:'0.01px', width:'8rem', fontSize:'11px'}}>🟢 Feature Request</p>
                </div>)}
                </div>
            </div>
            <div className="col-lg-2 name">
            <h6>🌞 In Progress <span style={{marginLeft:'14px'}}><FiPlus/>&nbsp;<BsThreeDots/></span></h6>
                <div className='row'>
                {progData==''?<></>:progData.map(obj=><div className='col-lg-12 backlogBlock' id='p'>
                    <p>{obj.id}</p>
                    <h6>{obj.title}</h6>
                    <p style={{border:'0.1px solid grey', borderRadius:'7px', borderWidth:'0.01px', width:'8rem', fontSize:'11px'}}>🟢 Feature Request</p>
                </div>)}
                </div>
            
            </div>
            <div className="col-lg-2 name">
            <h6>🔰 Done <span style={{marginLeft:'14px'}}><FiPlus/>&nbsp;<BsThreeDots/></span></h6>
                <div className='row'>
                {dneData==''?<></>:dneData.map(obj=><div className='col-lg-12 backlogBlock' id='d'>
                    <p>{obj.id}</p>
                    <h6>{obj.title}</h6>
                    <p style={{border:'0.1px solid grey', borderRadius:'7px', borderWidth:'0.01px', width:'8rem', fontSize:'11px'}}>🟢 Feature Request</p>
                </div>)}
                </div>
            </div>
            <div className="col-lg-2 name">
            <h6><FcCancel/> Cancelled <span style={{marginLeft:'14px'}}><FiPlus/>&nbsp;<BsThreeDots/></span></h6>
                <div className='row'>
                {cancelledData==''?<></>:cancelledData.map(obj=><div className='col-lg-12 backlogBlock' id='c'>
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
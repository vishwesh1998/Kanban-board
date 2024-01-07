import {useEffect, useState} from 'react'
import { FiPlus } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { ImUserTie } from "react-icons/im";


export default function Status(props){
    const [card, setCard] = useState('') 
    const [user, setUser] = useState('')

    const data = async () =>{
        const res = await fetch('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers') 
        const value = await res.json()
        setCard(value.tickets)
        setUser(value.users)
    }
    
    useEffect(()=>{
        data()
    },[])
    
    return <section id='parent'>
            <div className="container-fluid status">
                <div className="row" style={{justifyContent:'space-between'}}>
                    {user==''?'':user.map(obj=><div className="col-lg-2">
                        <h6><ImUserTie/> {obj.name} <span style={{marginLeft:'14px'}}><FiPlus/>&nbsp;<BsThreeDots/></span></h6>
                        <div className='row'>
                            {card.filter(card=>card.userId==obj.id).map(obj=><div className='col-lg-12 backlogBlock '>
                            <p>{obj.id}</p>
                            <h6>{obj.title}</h6>
                            <p style={{border:'0.1px solid grey', borderRadius:'7px', borderWidth:'0.01px', width:'8rem', fontSize:'11px'}}>🟢 Feature Request</p>
                        </div>)}
                        </div>
                        </div>)}    
                </div>
            </div>
        </section>
}
import Image from "next/image";

export default function UserLayout(props)
{
    return(
        <>
        
        <h5>{props.VicEmail}</h5>
        <h5>{props.Victim_FName}</h5>
        <h5>{props.Victim_LName}</h5>
        <h5>{props.Phone}</h5>
        <h5>{props.NID_No}</h5>
        <h5>{props.file}</h5>
        
        
        
        
        
        </>
    )
}
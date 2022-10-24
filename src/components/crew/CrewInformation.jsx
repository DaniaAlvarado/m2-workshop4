import React, { useEffect, useState } from "react";
import './CrewInformation.scss'
import '../../styles/universal.scss'
import douglasImage from '../../assets/crew/image-douglas-hurley.webp'
import markImage from '../../assets/crew/image-mark-shuttleworth.webp'
import victorImage from '../../assets/crew/image-victor-glover.webp'
import ansariImage from '../../assets/crew/image-anousheh-ansari.webp'
const CrewInformation = (crewInfo) => {

    const [crewMember, setCrewMember] = useState({});
    const [memberImage, setMemberImage] = useState(douglasImage);


    useEffect(() => {
        setCrewMember(crewInfo.crewInfo[0])
        setMemberImage(getImage(crewInfo.crewInfo[0]))
    }, []);

    const getImage = (member) => {
        if (member.name === 'Douglas Hurley') {
            return douglasImage
        } else if (member.name === 'Mark Shuttleworth') {
            return markImage
        } else if (member.name === 'Victor Glover') {
            return victorImage
        } else if (member.name === 'Anousheh Ansari') {
            return ansariImage
        }
    }
    const handleChangeMember = (newMember) => {
        console.log(newMember);
        setCrewMember(newMember)
        setMemberImage(getImage(newMember))
    }


    return (

        <>
            <aside className="left">
                <div className="left__tittle">
                    <span>MEET YOUR CREW</span>
                </div>
                <div className="left__role">
                    <span>{crewMember.role}</span>
                </div>
                <div className="left__name">
                    <span>{crewMember.name}</span>
                </div>
                <div className="left__bio">
                    <p>{crewMember.bio}</p>
                </div>
                <div className="left__buttons">
                    {
                        crewInfo.crewInfo.map((member, index) =>
                            <div
                                onClick={() => { handleChangeMember(crewInfo.crewInfo[index]) }}
                                key={index}
                                name={member.name}
                                className={member === crewMember ?
                                    "left__btn--active" :
                                    "left__btn--inactive"}>
                            </div>
                        )
                    }
                </div>
            </aside>
            <aside className="right">
                <div><img src={memberImage} alt="" /></div>
            </aside>
        </>
    )
}

export default CrewInformation;
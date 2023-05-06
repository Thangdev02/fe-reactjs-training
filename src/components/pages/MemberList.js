import React from "react";
import MyCard from "../commons/MyCard";
import { members } from "../../utils/Data";
import { useNavigate } from "react-router-dom"
import "../../styles/MemberList.css"


function MemberList() {
    const navigate = useNavigate();
    const handleClick = (member) => {
        navigate("/memberdetail", { state: { member } })
    };
    return (
        <ul>
                <div className="members">

            {members.map((member) => (
                        <MyCard className="member" key={member.index} title={member.name} text={member.position} />
            ))}
                </div>

        </ul>
    )
}
export default MemberList
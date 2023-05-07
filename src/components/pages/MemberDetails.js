import React from "react";
import { useLocation } from "react-router-dom"

function MemberDetails() {

    const { state } = useLocation();
    const { member } = state;

    return (
        <div>


            <h3>Name: {member.name}</h3>
            <p>Position: {member.position}</p>
            <p>Country: {member.country}</p>
            <p>
                Course: {member.course}
            </p>
            <p>Description: {member.description}</p>

        </div>
    );
}

export default MemberDetails;

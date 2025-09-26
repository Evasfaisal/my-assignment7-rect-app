import React from "react";
import Container from "./Container";
import vector1 from "../assets/vector1.png";

const CountBox = ({ inProgressCount, resolvedCount }) => {
    return (
        <Container>
            <div className="grid grid-cols-2 gap-5 my-10">
                <div className="bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] rounded-lg">
                    <div className="p-6" style={{ backgroundImage: `url(${vector1})` }}>
                        <h2 className="font-bold text-[35px] text-center text-white">In-Progress</h2>
                        <p className="font-semibold text-[46px] text-center text-white">{inProgressCount}</p>
                    </div>
                </div>

                <div className="bg-[linear-gradient(90deg,#54D068,#00827A)] rounded-lg">
                    <div className="p-6" style={{ backgroundImage: `url(${vector1})` }}>
                        <h2 className="font-bold text-[35px] text-center text-white">Resolved</h2>
                        <p className="font-semibold text-[46px] text-center text-white">{resolvedCount}</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CountBox;

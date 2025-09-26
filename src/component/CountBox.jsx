import React from "react";
import Container from "./Container";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vectorleft.png"

const CountBox = ({ inProgressCount, resolvedCount }) => {
    return (
     <div>
            <Container>
                <div className="grid  grid-cols-1 sm:grid-cols-2 gap-5 my-10 ">
                    <div className="bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] rounded-lg">
                        <div className="p-6" style={{
                            backgroundImage: `url(${vector1}), url(${vector2})`,
                            backgroundPosition: 'left, right',
                            backgroundRepeat: 'no-repeat, no-repeat',
                            backgroundSize: 'contain, contain'

                        }}>




                            <h2 className="font-bold  md:text-[35px] text-center text-white">In-Progress</h2>
                            <p className="font-semibold text-[46px] text-center text-white">{inProgressCount}</p>
                        </div>
                    </div>

                    <div className="bg-[linear-gradient(90deg,#54D068,#00827A)] rounded-lg">
                        <div className="p-6" style={{
                            backgroundImage: `url(${vector1}), url(${vector2})`,
                            backgroundPosition: 'left, right',
                            backgroundRepeat: 'no-repeat,no-repeat',
                            backgroundSize: 'contain, contain'

                        }}>





                            <h2 className="font-bold md:text-[35px] text-center text-white">Resolved</h2>
                            <p className="font-semibold text-[46px] text-center text-white">{resolvedCount}</p>
                        </div>
                    </div>
                </div>
            </Container>
     </div>
    );
};

export default CountBox;

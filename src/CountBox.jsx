import React from 'react';
import Container from './component/Container';
import vector1 from './assets/vector1.png';

const CountBox = () => {
    return (
        <div>
            <Container>
                <div className="grid grid-cols-2  gap-[20px] my-[50px]">
                    <div className="bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)]  rounded-lg">
                        <div
                            className="box-sizing z-1 p-6"
                            style={{
                                backgroundImage: `url(${vector1})`,
                            
                            }}
                        >
                            <h2 className="font-bold text-[35px]">In-Progress</h2>
                            <p className="font-semibold text-[46px]">0</p>
                        </div>
                    </div>

                    <div className="bg-[linear-gradient(90deg,#54D068,#00827A)]  rounded-lg">
                        <div
                            className="box-sizing z-1 p-6"
                            style={{
                                backgroundImage: `url(${vector1})`
                            }}
                        >
                            <h2 className="font-bold text-[35px]">Resolved</h2>
                            <p className="font-semibold text-[46px]">0</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CountBox;

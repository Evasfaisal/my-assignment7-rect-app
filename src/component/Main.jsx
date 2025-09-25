import React, { use } from 'react';
import Container from './Container';
import MainBox from './MainBox';

const Main = ({ fetchPromise }) => {
    const fetchData=use(fetchPromise)
    console.log(fetchData)
    return (
        // main div
        <div>
        
      <Container>
                {/* Parent container */}
                <div className="border mb-3 p-4 rounded-lg bg-gray-50">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left div */}
                        <div className="flex-1">
                            <h1 className="font-bold text-2xl mb-4">Customer Tickets</h1>

                            {/* Tickets grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                                {fetchData.map((data, index) => (
                                 <MainBox data={data} index={index}></MainBox>
                                ))}
                            </div>
                        </div>

                        {/* Right div */}
                        <div className="w-full lg:w-[320px] shrink-0">
                            {/* Right child 1 */}
                            <div className="h-[120px] border mb-3 rounded-lg p-4 bg-white shadow-sm">
                                <h1 className="font-semibold text-xl mb-1">Task Status</h1>
                                <p className="text-gray-600 text-sm">
                                    Select a ticket to add to Task Status
                                </p>
                            </div>

                            {/* Right child 2 */}
                            <div className="h-[120px] border rounded-lg p-4 bg-white shadow-sm">
                                <h1 className="font-semibold text-xl mb-1">Resolved Task</h1>
                                <p className="text-gray-600 text-sm">No resolved tasks yet.</p>
                            </div>
                        </div>
                    </div>
                </div>

      </Container>













        </div>
    );
};

export default Main;
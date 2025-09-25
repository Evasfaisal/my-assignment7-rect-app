import React, { use } from 'react';
import Container from './Container';

const Main = ({ fetchPromise }) => {
    const fetchData=use(fetchPromise)
    console.log(fetchData)
    return (
        // main div
        <div>
        
      <Container>

                {/*child div  */}
                <div className='border mb-3 '>

           <div className='flex justify-between'>
                        {/* left div */}
                        <div className=''>
                            <h1 className='font-bold ml-2'>Customer Tickets</h1>


                 

                             <div className='grid grid-cols-3 gap-1'>
                            {
                                fetchData.map(data => {
                                    console.log(data)
                                    return    <div className="max-w-md p-6 bg-white rounded-3xl shadow-md border border-gray-200 ">
                                            {/* Header */}
                                            <div className="flex justify-between items-start mb-4">
                                                <h2 className="text-lg font-semibold text-gray-900">
                                                    Payment Failed - Card Declined
                                                </h2>
                                                <span className="text-white text-sm font-medium bg-green-500 px-3 py-1 rounded-full">
                                                    Open
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-600 mb-4">
                                                Customer attempted to pay using Visa ending <span className="font-medium">1234</span> but the payment keeps failing despite sufficient balance.
                                            </p>

                                            {/* Footer */}
                                            <div className="flex justify-between items-center text-sm">
                                            <span className='text-gray-500 font-medium'>#1001</span>

                                                <span className="text-red-500 font-semibold">HIGH PRIORITY</span>
                                                <div className="flex items-center text-gray-500">
                                                <span className="mr-1">{data.customer}</span>
                                                    <span>1/16/2024</span>
                                                </div>
                                            </div>
                                        </div>

                                    
                                })
                            }
                                    </div>

                        </div>


                        {/* rigt div */}

                        <div>
                            {/* rigt child1 */}
                            <div className='h-[90px] border'>
                                <h1 className='font-semibold'>Task Status</h1>
                                <p>Select a ticket to add to Task Status</p>
                            </div>

                            {/* right child2 */}

                            <div className='h-[90px] border'>
                                <h1 className='font-semibold'>Resolved Task</h1>
                                <p>No resolved tasks yet.</p>
                            </div>


                        </div>
           </div>



                </div>
      </Container>













        </div>
    );
};

export default Main;
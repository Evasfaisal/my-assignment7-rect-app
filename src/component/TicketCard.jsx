import React from "react";

const TicketCard = ({ ticket, onClick, isTaskStatus = false }) => {
    return (
        <div
            onClick={!isTaskStatus ? () => onClick(ticket.id) :''}
            className="p-6 bg-white rounded-3xl shadow-md border cursor-pointer"
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{ticket.title}</h2>
                {!isTaskStatus && (
                    <div
                    
                        className={`px-4 py-2 rounded-full flex items-center ${ticket.status === "open"
                                ? "bg-green-200 text-green-800"
                                : ticket.status === "in-progress"
                                    ? "bg-yellow-200 text-yellow-800"
                                    : "bg-gray-200 text-gray-800"
                            }`}
                    >
                        <div className={`w-4 h-4  rounded-full mr-3  ${ticket.status === "open"
                            ? "bg-green-700 "
                            : ticket.status === "in-progress"
                                ? "bg-yellow-400 "
                                : "bg-gray-200"
                            } `}> 
                            
                        </div>
                        <span className="text-sm font-medium">{ticket.status}</span>
                    </div>
                )}
            </div>
            <p className="text-gray-600 mb-4">{ticket.description}</p>
            <div className="flex justify-between text-sm">
                <span>#{ticket.id}</span>
                <span
                    className={`font-semibold ${ticket.priority === "High" ? "text-red-500" : "text-yellow-500"
                        }`}
                >
                    {ticket.priority.toUpperCase()} PRIORITY
                </span>
                <span>{ticket.customer}</span>
            </div>
        </div>
    );
};

export default TicketCard;

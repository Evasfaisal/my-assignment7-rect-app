
import React, {use, useState } from "react";
import CountBox from "./CountBox";
import TicketCard from "./TicketCard";
import Container from "./Container";
import { toast } from "react-toastify";

const Main = ({ fetchPromise }) => {
    const fetchData = use(fetchPromise);
    const [tickets, setTickets] = useState(
        fetchData.map((ticketData) => ({ ...ticketData, status: "open" }))
    );

    const inProgressCount = tickets.filter((data) => data.status === "in-progress").length;
    const resolvedCount = tickets.filter((data) => data.status === "resolved").length;

    const handleTicketClick = (id) => {
        setTickets((previousData) =>
            previousData.map((data) =>
                data.id === id && data.status === "open"
        ? { ...data, status: "in-progress" }
        : data
    )
);
toast.success("Ticket moved to In-Progress!",);
};

    const handleComplete = (id) => {
        setTickets((previousData) =>
            previousData.map((data) =>
                data.id === id && data.status === "in-progress"
                    ? { ...data, status: "resolved" }
                    : data
            )
        );
        toast.success("Ticket Resolved!", );
    };

    return (
        <div className=" mb-8">

            <CountBox inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
            <Container>
                <div className="flex flex-col lg:flex-row gap-6 ">
                    {/* Customer Tickets */}
                    <div className="flex-1">
                        <h1 className="font-bold text-2xl mb-4">Customer Tickets</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {tickets
                                .filter((data) => data.status !== "resolved")
                                .map((data) => (
                                    <TicketCard key={data.id} ticket={data} onClick={handleTicketClick} />
                                ))}
                        </div>
                    </div>

                   
                    <div className="w-full lg:w-[320px]">
                        <h1 className="font-semibold text-xl mb-2 ">Task Status</h1>
                        {tickets
                            .filter((data) => data.status === "in-progress")
                            .map((data) => (
                                <div
                                    key={data.id}
                                    className="rounded-lg p-4 bg-white shadow-sm mb-3"
                                >
                                    <h1 className="font-bold text-center">{data.title}</h1>
                                    <button
                                        onClick={() => handleComplete(data.id)}
                                        className="w-full bg-green-700 text-white p-3 rounded-lg font-bold mt-3"
                                    >
                                        Complete
                                    </button>
                                </div>
                            ))}

                        <h1 className="font-semibold text-xl mb-2">Resolved Task</h1>
                        {tickets
                            .filter((data) => data.status === "resolved")
                            .map((data) => (
                                <div
                                    key={data.id}
                                    className="rounded-lg p-4 bg-white shadow-sm mb-3"
                                >
                                    <h1 className="font-bold text-center">{data.title}</h1>
                                </div>
                            ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Main;


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

    const inProgressCount = tickets.filter((t) => t.status === "in-progress").length;
    const resolvedCount = tickets.filter((t) => t.status === "resolved").length;

    const handleTicketClick = (id) => {
        setTickets((prev) =>
            prev.map((t) =>
                t.id === id && t.status === "open"
                    ? { ...t, status: "in-progress" }
                    : t
            )
        );
        toast.success("Ticket moved to In-Progress!", { autoClose: 1000 });
    };

    const handleComplete = (id) => {
        setTickets((prev) =>
            prev.map((t) =>
                t.id === id && t.status === "in-progress"
                    ? { ...t, status: "resolved" }
                    : t
            )
        );
        toast.success("Ticket Resolved!", { autoClose: 1000 });
    };

    return (
        <div>
            <CountBox inProgressCount={inProgressCount} resolvedCount={resolvedCount} />

            <Container>
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Customer Tickets */}
                    <div className="flex-1">
                        <h1 className="font-bold text-2xl mb-4">Customer Tickets</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {tickets
                                .filter((t) => t.status !== "resolved")
                                .map((t) => (
                                    <TicketCard key={t.id} ticket={t} onClick={handleTicketClick} />
                                ))}
                        </div>
                    </div>

                    {/* Task Status */}
                    <div className="w-full lg:w-[320px]">
                        <h1 className="font-semibold text-xl mb-2">Task Status</h1>
                        {tickets
                            .filter((t) => t.status === "in-progress")
                            .map((t) => (
                                <div
                                    key={t.id}
                                    className="border rounded-lg p-4 bg-white shadow-sm mb-3"
                                >
                                    <h1 className="font-bold text-center">{t.title}</h1>
                                    <button
                                        onClick={() => handleComplete(t.id)}
                                        className="w-full bg-green-700 text-white p-3 rounded-lg font-bold mt-3"
                                    >
                                        Complete
                                    </button>
                                </div>
                            ))}

                        <h1 className="font-semibold text-xl mb-2">Resolved Task</h1>
                        {tickets
                            .filter((t) => t.status === "resolved")
                            .map((t) => (
                                <div
                                    key={t.id}
                                    className="border rounded-lg p-4 bg-white shadow-sm mb-3"
                                >
                                    <h1 className="font-bold text-center">{t.title}</h1>
                                </div>
                            ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Main;

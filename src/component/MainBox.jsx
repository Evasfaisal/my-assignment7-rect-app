import React, { useState } from 'react';
import {toast} from "react-toastify"

const MainBox = ({ data,index }) => {
    const [isSelected,setSelected]=useState(true)



    return (
        <div>
            <div onClick={() => {
                setSelected(!isSelected);
                toast.success(`${data.title} added to Task Status!`, {
                    position: "top-right",
                    autoClose: 2000,
                });
            }}



                key={index}
                className="w-full p-6 bg-white rounded-3xl shadow-md border border-gray-200"
            >
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                    <h2 className="text-lg font-semibold text-gray-900">
                        {data.title}
                    </h2>



                    <div className={`px-4 py-2 rounded-full flex items-center shrink-0 
        ${isSelected ? "bg-[#b9f8cf]" : "bg-[#f8f3b9]"}`}>

                        <button
                            className={`w-4 h-4 rounded-full mr-2 
          ${isSelected ? "bg-[#02a53b]" : "bg-[#febb0c]"}`}
                        ></button>
                        <span className="text-black text-sm font-medium">
                            {isSelected ? data.status : "in-progress"}
                        </span>


                    </div>
                </div>




                {/* Description */}
                <p className="text-gray-600 mb-4">{data.description}</p>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm gap-2">
                    <span className="text-gray-500 font-medium">#{data.id}</span>
                    <span
                        className={`font-semibold ${data.priority === "High" ? "text-red-500" : "text-yellow-500"
                            }`}
                    >
                        {data.priority.toUpperCase()} PRIORITY
                    </span>
                    <div className="flex items-center text-gray-500">
                        <span className="mr-1">{data.customer}</span>
                        <span>
                            {new Date(data.createdAt).toLocaleDateString("en-US")}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBox;
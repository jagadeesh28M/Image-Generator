import  { useEffect, useState } from 'react';

interface labels{
    heading:string,
    bt1:string,
    bt2:string,
    sendData: (ratioValue:string) => void
}

export function Selection({heading,bt1,bt2,sendData}:labels) {
    const [activeButton, setActiveButton] = useState<string>("");

    useEffect(()=>{
        sendData(activeButton);
    },[sendData,activeButton]);

    return (
        <div className="mx-3">
            <div>
                <h2 className="font-semibold text-xl  text-white">{heading}</h2>
            </div>
            <div className="flex justify-evenly items-center m-3 gap-3">
                <Btn
                    label={bt1}
                    isActive={activeButton === bt1}
                    onClick={() => {
                        setActiveButton(bt1);
                    }}
                />
                <Btn
                    label={bt2}
                    isActive={activeButton === bt2}
                    onClick={() => {
                        setActiveButton(bt2);
                    }}
                />
            </div>
        </div>
        
    );
}

const Btn = ({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) => {
    return (
        <button
            className={`font-semibold rounded-lg w-full h-10 text-center ${isActive ? 'bg-red-500 border-2 border-white opacity-100' : 'bg-indigo-600 opacity-80'} hover:bg-indigo-300`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

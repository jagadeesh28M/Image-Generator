import { Button } from "./Button"
import { Prompt } from "./Prompt"
import { Selection } from "./Selection"

export const Card = () =>{
    return(
        <div className="bg-gradient-to-r from-indigo-500 to-red-500 rounded-lg  text-white shadow-lg p-6 max-w-md mx-auto z-10 relative">
            <h2 className="text-2xl p-1 font-bold text-center">Text to Video Generator</h2>
            <p>Enter the prompt to generate the video</p>
            <Prompt />
            <Selection heading={"Ratio"} bt1={"▭ 16:9"} bt2={"▯ 9:16"} />
            <Selection heading={"Duration"} bt1={"5s"} bt2={"10s"} />
            <Button />
            
        </div>
    ) 
}
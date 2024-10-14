export const Prompt = () =>{
    return(
        <div className="pt-3">
            <h2 className="font-semibold text-xl py-2">Prompt</h2>
            <textarea className="rounded-lg p-2 w-full text-black resize-none overflow-hidden h-60" placeholder="Enter your prompt here" rows={1}/>   
        </div>
    )
}
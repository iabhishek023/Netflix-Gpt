const VideoTitle=({title,overview})=>{
    return (
        <div className="pt-36 px-14">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div className="flex gap-5">
                <button className="border border-black bg-white text-black rounded-lg bg-opacity-10 m-4 p-6 w-36 font-bold">▶️ Play</button>
                <button className="border border-black rounded-lg bg-white text-black m-4 p-6 w-36 bg-opacity-10 font-bold">ℹ More Info</button>
            </div>
        </div>
    ) 
}

export default VideoTitle; 
const VideoTitle=({title,overview})=>{
    return (
        <div className="w-screen aspect-video pt-[10%] px-[11%] absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="py-4 text-lg w-1/2">{overview}</p>
            <div className="flex gap-5">
                <button className="border border-black bg-gray-600 text-white rounded-lg  m-4 p-3 w-30 text-3xl  font-bold hover:bg-opacity-90">▶️Play</button>
                <button className="border border-black bg-gray-600 text-white rounded-lg  m-4 p-3 w-30 text-3xl  font-bold hover:bg-opacity-90">ℹMore Info</button>
            </div>
        </div>
    ) 
}

export default VideoTitle; 
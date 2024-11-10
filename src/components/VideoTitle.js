const VideoTitle=({title,overview})=>{
    return (
        <div className="w-screen aspect-video pt-[10%] px-[11%] absolute text-white bg-gradient-to-r from-black">
            <h1 className=" text-2xl md:text-4xl font-bold">{title}</h1>
            <p className="hidden md:inline-block py-4 text-lg w-1/2">{overview}</p>
            <div className="flex gap-5">
                <button className="border border-black bg-gray-600 text-white rounded-lg  m-2 p-2 md:m-4 md:p-3 w-25 md:w-30 text-xl md:text-3xl  md:font-bold hover:bg-opacity-90">▶️Play</button>
                <button className="hidden md:inline-block border border-black bg-gray-600 text-white rounded-lg  m-2 p-2 md:m-4 md:p-3 w-25 md:w-30 text-xl md:text-3xl  md:font-bold hover:bg-opacity-90">ℹMore Info</button>
            </div>
        </div>
    ) 
}

export default VideoTitle; 
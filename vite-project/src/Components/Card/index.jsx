/* eslint-disable react/prop-types */

function Card ({data}) {
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {data.category}
                </span>
                <img  className="w-full h-full object-contain rounded-lg" src={data.image} alt={data.title}/>
                <button className="absolute top-0 right-0 flex justify-center items-center bg-white text-cyan-400 font-bold text-lg w-6 h-6 rounded-full m-2">
                    +
                </button>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm text-black font-light">{data.title}</span>
                <span className="text-lg text-black font-medium">${data.price}</span>
            </p>
        </div>
    )
}

export default Card
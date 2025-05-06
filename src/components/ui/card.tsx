import PostCardProps from "../../models/blog";
const Card: React.FC<PostCardProps> = ({ id, title, body }) => {

    return (
        <>


            <div key={id} className="card bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">

                <div className="relative">
                    <figure>
                        <img
                            src={`https://picsum.photos/200/300?random=${id + Math.floor(Math.random() * 100)}`}
                            alt={title}
                            className="w-full h-48 object-cover"
                        />
                    </figure>


                    <div className="absolute -bottom-6 left-4 shadow-sm rounded-full border-2 border-white">
                        <img
                            src={`https://picsum.photos/200/300?random=${id + Math.floor(Math.random() * 100)}`}
                            alt="Profile"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                    </div>

                    <button className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-xs transition-colors duration-300">
                        Business
                    </button>
                </div>

                <div className="card-body p-4 pt-8">
                    <h2 className="card-title text-lg font-bold mb-2 text-gray-600 cursor-pointer">{title}</h2>
                    <p className="text-gray-600 mb-4">{body}</p>
                    <p className="text-gray-400 text-sm">
                        {new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toLocaleDateString()}
                    </p>
                </div>


            </div>
        </>
    );
};

export default Card;
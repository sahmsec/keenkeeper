import { UserPlus } from "lucide-react";

const Home = () => {
    return (
        <div className="mt-12 max-w-6xl mx-auto px-6">
            <div className="mt-16 max-w-3xl mx-auto flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold text-[#1F2937]">
                    Friends to keep close in your life
                </h1>

                <p className="mt-4 text-gray-500">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture
                    the relationships that matter most.
                </p>

                <button className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#244D3F] text-white font-medium">
                    Add a Friend
                </button>
            </div>

            <div className="mt-12 max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                        <h2 className="text-2xl font-bold text-[#244D3F]">10</h2>
                        <p className="text-gray-500 mt-1">Total Friends</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                        <h2 className="text-2xl font-bold text-[#244D3F]">3</h2>
                        <p className="text-gray-500 mt-1">On Track</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                        <h2 className="text-2xl font-bold text-[#244D3F]">6</h2>
                        <p className="text-gray-500 mt-1">Need Attention</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                        <h2 className="text-2xl font-bold text-[#244D3F]">12</h2>
                        <p className="text-gray-500 mt-1">Interactions This Month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
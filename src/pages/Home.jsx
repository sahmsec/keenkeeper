import { UserPlus } from "lucide-react";

const Home = () => {
  return (
    <div className="text-center mt-16">
      <h1 className="text-4xl font-bold text-[#1F2937]">
        Friends to keep close in your life
      </h1>

      <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <button className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#244D3F] text-white font-medium">
        <UserPlus size={18} />
        Add a Friend
      </button>
    </div>
  );
};

export default Home;
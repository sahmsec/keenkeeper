import { FaFacebook, FaInstagram,  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white mt-16">

            <div className="max-w-6xl mx-auto px-6 py-12 text-center">
                <h1 className="text-3xl md:text-4xl font-bold">KeenKeeper</h1>

                <p className="mt-4 text-sm text-gray-200 max-w-2xl mx-auto">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture
                    the relationships that matter most.
                </p>

                <p className="mt-6 font-medium">Social Links</p>

                {/* Icons */}
                <div className="flex justify-center gap-4 mt-4">
                    <div className="bg-white text-black p-2 rounded-full">
                        <FaInstagram size={16} />
                    </div>

                    <div className="bg-white text-black p-2 rounded-full flex items-center justify-center">
                        <FaFacebook size={14} />
                    </div>

                    <div className="bg-white text-black p-2 rounded-full flex items-center justify-center">
                        <FaXTwitter size={14} />
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-500/30"></div>

            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300">
                <p>© 2026 KeenKeeper. All rights reserved.</p>

                <div className="flex gap-6 mt-2 md:mt-0">
                    <p className="cursor-pointer hover:underline">Privacy Policy</p>
                    <p className="cursor-pointer hover:underline">Terms of Service</p>
                    <p className="cursor-pointer hover:underline">Cookies</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
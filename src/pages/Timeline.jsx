import { useTimeline } from "../context/TimelineContext";
import { useState } from "react";

// icons
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

const Timeline = () => {
    const { timeline } = useTimeline();

    const [filter, setFilter] = useState("all");
    const [sortOrder, setSortOrder] = useState("newest");
    const [search, setSearch] = useState("");

    // 🔥 PROCESS DATA (search + filter + sort)
    const processedTimeline = timeline
        .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.type.toLowerCase().includes(search.toLowerCase())
        )
        .filter((item) =>
            filter === "all" ? true : item.type === filter
        )
        .sort((a, b) => {
            return sortOrder === "newest"
                ? new Date(b.date) - new Date(a.date)
                : new Date(a.date) - new Date(b.date);
        });

    return (
        <div className="p-6 w-full">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h1 className="text-2xl font-bold mb-6">Timeline</h1>

                {/* 🔥 Search + Filter + Sort */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">

                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search by name or type..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="px-4 py-2 border rounded-lg w-full sm:w-1/2"
                    />

                    {/* Filter */}
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="px-4 py-2 border rounded-lg"
                    >
                        <option value="all">All</option>
                        <option value="call">Call</option>
                        <option value="text">Text</option>
                        <option value="video">Video</option>
                    </select>

                    {/* Sort */}
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="px-4 py-2 border rounded-lg"
                    >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                    </select>

                </div>

                {/* Timeline List */}
                {processedTimeline.length === 0 ? (
                    <p>No interactions found.</p>
                ) : (
                    <div className="space-y-3">
                        {processedTimeline.map((item) => (
                            <div
                                key={item.id}
                                className="p-4 border rounded-lg flex items-center gap-4 bg-white hover:bg-gray-50 transition"
                            >
                                {/* Icon */}
                                <img
                                    src={
                                        item.type === "call"
                                            ? callIcon
                                            : item.type === "text"
                                                ? textIcon
                                                : videoIcon
                                    }
                                    alt={item.type}
                                    className="w-6 h-6"
                                />

                                {/* Content */}
                                <div>
                                    <p className="font-medium text-gray-800">{item.title}</p>
                                    <p className="text-sm text-gray-400">
                                        {new Date(item.date).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Timeline;
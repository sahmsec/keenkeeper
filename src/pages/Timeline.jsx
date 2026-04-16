import { useTimeline } from "../context/TimelineContext";
import { useState } from "react";

// icons
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

const Timeline = () => {
    const { timeline } = useTimeline();
    const [filter, setFilter] = useState("all");

    const filteredTimeline =
        filter === "all"
            ? timeline
            : timeline.filter((item) => item.type === filter);

    return (
        <div className="p-6 w-full">
            <div className="max-w-6xl mx-auto">

                <h1 className="text-2xl font-bold mb-6">Timeline</h1>

                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="mb-6 px-4 py-2 shadow-md rounded-lg"
                >
                    <option value="all">Filter timeline</option>
                    <option value="call">Call</option>
                    <option value="text">Text</option>
                    <option value="video">Video</option>
                </select>

                {filteredTimeline.length === 0 ? (
                    <p>No interactions yet.</p>
                ) : (
                    <div className="space-y-3">
                        {filteredTimeline.map((item) => (
                            <div
                                key={item.id}
                                className="p-4 shadow-md rounded-lg flex items-center gap-4 bg-white hover:bg-gray-50 transition"
                            >
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

                                <div>
                                    <p className="font-medium text-gray-800">{item.title}</p>
                                    <p className="text-sm text-gray-400">
                                        {new Date(item.date).toLocaleDateString()}
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
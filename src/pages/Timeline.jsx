import { useTimeline } from "../context/TimelineContext";
import { useState } from "react";

import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

const Timeline = () => {
  const { timeline } = useTimeline();

  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [search, setSearch] = useState("");

  // helper to extract name safely
  const getName = (item) => {
    if (item.name) return item.name.toLowerCase();

    const title = item.title?.toLowerCase() || "";
    return title.replace(/^(call|text|video) with /, "");
  };

  // process data: search + filter + sort
  const processedTimeline = timeline
    .filter((item) => {
      if (!search) return true;

      const query = search.toLowerCase().trim();
      const name = getName(item);
      const type = item.type?.toLowerCase() || "";

      return name.includes(query) || type.includes(query);
    })
    .filter((item) =>
      filter === "all" ? true : item.type === filter
    )
    .sort((a, b) => {
      const dateA = new Date(a.date || 0).getTime();
      const dateB = new Date(b.date || 0).getTime();

      return sortOrder === "newest"
        ? dateB - dateA
        : dateA - dateB;
    });

  return (
    <div className="p-6 w-full mt-10">
      <div className="max-w-6xl mx-auto">

        {/* header */}
        <div className="mb-6">

          {/* row 1 */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Timeline</h1>

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 shadow-md rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-[#244D3F]"
            />
          </div>

          {/* row 2 */}
          <div className="flex gap-3 mt-4">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-3 py-2 shadow-md rounded-lg"
            >
              <option value="all">All</option>
              <option value="call">Call</option>
              <option value="text">Text</option>
              <option value="video">Video</option>
            </select>

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-3 py-2 shadow-md rounded-lg"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>

        </div>

        {/* list */}
        {processedTimeline.length === 0 ? (
          <p>No interactions found.</p>
        ) : (
          <div className="space-y-3">
            {processedTimeline.map((item) => (
              <div
                key={item.id}
                className="p-4 shadow-md rounded-lg flex items-center gap-4 bg-white hover:bg-gray-50 transition"
              >
                {/* icon */}
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

                {/* content */}
                <div>
                  <p className="font-medium text-gray-800">
                    {item.title}
                  </p>
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
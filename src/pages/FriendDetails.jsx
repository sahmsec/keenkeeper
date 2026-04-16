import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import friends from "../data/friends.json";
import {
  AlarmClock,
  Archive,
  Trash2,
  Phone,
  MessageSquare,
  Video,
} from "lucide-react";

import { useTimeline } from "../context/TimelineContext";
import { toast } from "react-toastify";
import NotFound from "./NotFound";

const FriendDetails = () => {
  const { id } = useParams();

  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addEntry } = useTimeline();

  useEffect(() => {
    setTimeout(() => {
      const found = friends.find((f) => f.id === parseInt(id));
      setFriend(found);
      setLoading(false);
    }, 300);
  }, [id]);

  // ✅ LOADING
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
      </div>
    );
  }


  // not found
  if (!friend) {
    return <NotFound />;
  }


  const handleAction = (type) => {
    const newEntry = {
      id: Date.now(),
      type,
      title: `${type} with ${friend.name}`,
      date: new Date().toISOString(),
    };

    addEntry(newEntry);
    toast(`${type} logged!`);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* LEFT COLUMN */}
      <div className="space-y-4">

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-20 h-20 rounded-full mx-auto object-cover"
          />

          <h2 className="mt-4 text-lg font-semibold">{friend.name}</h2>

          <span
            className={`inline-block mt-2 px-3 py-1 text-xs rounded-full text-white ${friend.status === "overdue"
                ? "bg-red-500"
                : friend.status === "almost due"
                  ? "bg-yellow-500"
                  : "bg-[#244D3F]"
              }`}
          >
            {friend.status === "almost due"
              ? "Almost Due"
              : friend.status === "on-track"
                ? "On-Track"
                : "Overdue"}
          </span>

          <div className="mt-3 flex justify-center gap-2 flex-wrap">
            {friend.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>

          <p className="mt-4 text-sm text-gray-500 italic">
            "{friend.bio}"
          </p>

          <p className="mt-2 text-xs text-gray-400">{friend.email}</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          <button className="w-full bg-white shadow-2xs rounded-lg py-2 text-sm flex items-center justify-center gap-2 hover:bg-gray-50">
            <AlarmClock size={16} />
            Snooze 2 Weeks
          </button>

          <button className="w-full bg-white shadow-2xs rounded-lg py-2 text-sm flex items-center justify-center gap-2 hover:bg-gray-50">
            <Archive size={16} />
            Archive
          </button>

          <button className="w-full bg-white border-red-300 rounded-lg py-2 text-sm text-red-500 flex items-center justify-center gap-2 hover:bg-red-50">
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="lg:col-span-2 space-y-6">

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-bold text-[#244D3F]">
              {friend.days_since_contact}
            </h3>
            <p className="text-sm text-gray-500">Days Since Contact</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-bold text-[#244D3F]">
              {friend.goal}
            </h3>
            <p className="text-sm text-gray-500">Goal (Days)</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-bold text-[#244D3F]">
              {new Date(friend.next_due_date).toDateString()}
            </h3>
            <p className="text-sm text-gray-500">Next Due</p>
          </div>
        </div>

        {/* Relationship Goal */}
        <div className="bg-white rounded-lg shadow-sm p-5 flex justify-between items-center">
          <div>
            <h3 className="font-semibold">Relationship Goal</h3>
            <p className="text-sm text-gray-500 mt-1">
              Connect every <span className="font-semibold">{friend.goal}</span> days
            </p>
          </div>

          <button className="px-3 py-1 border rounded-md text-sm hover:bg-green-200">
            Edit
          </button>
        </div>

        {/* Quick Check-In */}
        <div className="bg-white rounded-lg shadow-sm p-5">
          <h3 className="font-semibold mb-4">Quick Check-In</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <button
              onClick={() => handleAction("call")}
              className="bg-[#F8FAFC] shadow-md rounded-lg py-4 flex flex-col items-center gap-2 hover:bg-green-200"
            >
              <Phone size={20} />
              Call
            </button>

            <button
              onClick={() => handleAction("text")}
              className="bg-[#F8FAFC] shadow-md rounded-lg py-4 flex flex-col items-center gap-2 hover:bg-green-200"
            >
              <MessageSquare size={20} />
              Text
            </button>

            <button
              onClick={() => handleAction("video")}
              className="bg-[#F8FAFC] shadow-md rounded-lg py-4 flex flex-col items-center gap-2 hover:bg-green-200"
            >
              <Video size={20} />
              Video
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendDetails;
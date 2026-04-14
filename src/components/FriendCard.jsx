const FriendCard = ({ friend }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
      
      {/* Image */}
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-20 h-20 rounded-full mx-auto object-cover"
      />

      {/* Name */}
      <h3 className="mt-4 font-semibold text-lg text-[#1F2937]">
        {friend.name}
      </h3>

      {/* Days */}
      <p className="text-sm text-gray-500 mt-1">
        {friend.days_since_contact}d ago
      </p>

      {/* Tags */}
      <div className="mt-3 flex justify-center gap-2 flex-wrap">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700"
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

      {/* Status */}
      <div className="mt-4">
        <span
          className={`px-4 py-1 text-sm rounded-full text-white ${
            friend.status === "overdue"
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
      </div>
    </div>
  );
};

export default FriendCard;
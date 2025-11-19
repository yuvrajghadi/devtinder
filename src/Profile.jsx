import { useState } from "react";

export default function Profile() {
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    age: 25,
    bio: "Love traveling and meeting new people!",
    avatar:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={user.avatar} alt="Profile" className="w-full h-52 object-cover" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
          <p className="text-sm">Age: {user.age}</p>
          <p className="text-sm italic mt-2">{user.bio}</p>

          <div className="card-actions mt-4">
            <button className="btn btn-primary">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

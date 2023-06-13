import React, { useEffect, useState } from 'react';
import OurMember from './OurMember';

const OurMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/user`)
      .then(res => res.json())
      .then(data => setMembers(data));
  }, [members]);

  return (
    <div className="mx-20 h-screen mt-5">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center text-white">
              <th className="text-xl bg-blue-900">Index </th>
              <th className="text-xl bg-blue-900">Name</th>
              <th className="text-xl bg-blue-900">Student Id</th>
              <th className="text-xl bg-blue-900">Blood Group</th>
              <th className="text-xl bg-blue-900">Member</th>
            </tr>
        
          </thead>
          <tbody className="text-center">
            {members.map((member, index) => (
              <OurMember
                key={member._id}
                member={member}
                index={index + 1}
              ></OurMember>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OurMembers;

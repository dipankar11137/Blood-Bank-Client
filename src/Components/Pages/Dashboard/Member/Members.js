import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Member from './Member';

const Members = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://interective-dashboard-server.onrender.com/user`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [users]);

  const handleAddMember = email => {
    const updatedProfile = {
      email: users?.email,
      name: users?.name,
      bloodGroup: users?.bloodGroup,
      studentId: users?.studentId,
      role: true,
    };
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      fetch(
        `https://interective-dashboard-server.onrender.com/create-user/${email}`,
        {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(updatedProfile),
        }
      )
        .then(res => res.json())
        .then(data => {
          toast.success(' Successfully Add Member ');
        });
    }
  };
  const handleRemoveMember = email => {
    const updatedProfile = {
      email: users?.email,
      name: users?.name,
      bloodGroup: users?.bloodGroup,
      studentId: users?.studentId,
      role: false,
    };
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      fetch(
        `https://interective-dashboard-server.onrender.com/create-user/${email}`,
        {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(updatedProfile),
        }
      )
        .then(res => res.json())
        .then(data => {
          toast.success('Successfully Remove  Member ');
        });
    }
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th className="text-xl">Index</th>
              <th className="text-xl">Name</th>
              <th className="text-xl">Student Id</th>
              <th className="text-xl">Blood Group</th>
              <th className="text-xl">Make member / Id</th>
              <th className="text-xl">Remove</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((user, index) => (
              <Member
                key={user._id}
                user={user}
                index={index + 1}
                handleAddMember={handleAddMember}
                handleRemoveMember={handleRemoveMember}
              ></Member>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;

import React from 'react';

const Member = ({ user, index, handleAddMember, handleRemoveMember }) => {
  const id = user?._id;
  return (
    <tr>
      <th>{index}</th>
      <td>{user?.name}</td>
      <td>{user?.studentId}</td>
      <td>{user?.bloodGroup}</td>
      <td>
        {user?.role ? (
          <>{id}</>
        ) : (
          <button
            onClick={() => handleAddMember(user?.email)}
            className="btn btn-secondary  btn-sm text-white "
          >
            Make Member
          </button>
        )}
      </td>
      <td>
        {user?.role ? (
          <button
            onClick={() => handleRemoveMember(user?.email)}
            className="btn btn-primary  btn-sm text-white"
          >
            Remove
          </button>
        ) : (
          <button
            disabled
            onClick={() => handleRemoveMember(user?.email)}
            className="btn btn-primary  btn-sm text-white"
          >
            Remove
          </button>
        )}
      </td>
    </tr>
  );
};

export default Member;

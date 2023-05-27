import React from 'react';

const Member = ({ user, index, handleAddMember, handleRemoveMember }) => {
  return (
    <tr>
      <th>{index}</th>
      <td>{user?.name}</td>
      <td>{user?.studentId}</td>
      <td>{user?.bloodGroup}</td>
      <td>
        <button
          onClick={() => handleAddMember(user?.email)}
          className="btn btn-secondary btn-sm"
        >
          Make Member
        </button>
      </td>
      <td>
        <button
          onClick={() => handleRemoveMember(user?.email)}
          className="btn btn-primary btn-sm"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default Member;

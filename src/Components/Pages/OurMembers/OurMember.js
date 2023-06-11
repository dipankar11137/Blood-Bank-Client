import React from 'react';

const OurMember = ({ index, member, freeBlood }) => {
  return (
    <>
      {' '}
      {member?.role ? (
        <tr>
          <th className="bg-blue-200 text-xl font-bold">{index}</th>
          <td className="bg-blue-200 text-xl font-bold">{member?.name}</td>
          <td className="bg-blue-200 text-xl font-bold">{member?.studentId}</td>
          <td className="bg-blue-200 text-xl font-bold">
            {member?.bloodGroup}
          </td>

          <td className="bg-blue-200 text-xl font-bold">Yes</td>
        </tr>
      ) : (
        <></>
      )}
    </>
  );
};

export default OurMember;

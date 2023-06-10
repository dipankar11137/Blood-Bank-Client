import React from 'react';

const OurMember = ({ index, member }) => {
  return (
    <>
      {' '}
      {member?.role ? (
        <tr>
          <th className="bg-blue-200">{index}</th>
          <td className="bg-blue-200">{member?.name}</td>
          <td className="bg-blue-200">{member?.studentId}</td>
          <td className="bg-blue-200">{member?.bloodGroup}</td>
        </tr>
      ) : (
        <></>
      )}
    </>
  );
};

export default OurMember;

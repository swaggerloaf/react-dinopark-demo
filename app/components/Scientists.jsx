import React from 'react';

function Scientists({ data }) {
  return (
    <table className="table table-primary">
      <thead>
        <tr>
          <td>First Name</td>
        </tr>
      </thead>
      <tbody>
        {data.map(sci => (
          <tr key={sci.id}>
            <td>{sci.firstName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Scientists;

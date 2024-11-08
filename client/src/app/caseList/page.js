import React from "react";

const caseList = () => {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg">Case No</th>
              <th className="text-lg">Next Date</th>
              <th className="text-lg">Court Name</th>
              <th className="text-lg">Client Name</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th>1</th>
              <td>15/11/2024</td>
              <td>Metropolitan Sessions Judge Court</td>
              <td>A vs B</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>23/11/2024</td>
              <td>District and Sessions Judge Court</td>
              <td>B vs D</td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
              <th>3</th>
              <td>28/11/2024</td>
              <td>Chief Judicial Magistrate Court</td>
              <td>T vs P</td>
            </tr>
            {/* row 4 */}
            <tr className="hover">
              <th>4</th>
              <td>28/11/2024</td>
              <td>Chief Metropolitan Magistrate Court</td>
              <td>T vs P</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default caseList;

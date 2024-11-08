'use client'
import React from "react";
import Link from "next/link";
import { FilePlus2, Folders, CalendarDays } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl mb-6">Firm Name</h1>
      <h3 className="text-2xl mb-6">Lawyer Name</h3>
      <div className="tooltip mt-4 mx-8" data-tip="Add new case">
      <Link href="/addCase"><FilePlus2 size={42} /></Link>
      </div>
      <div className="tooltip mt-4 mx-8" data-tip="View case list">
      <Link href="/caseList"><Folders size={42} /></Link>
      </div>
      <div className="tooltip mt-4 mx-8" data-tip="Upcoming Hearing Date">
        <CalendarDays size={42} />
      </div>
    </div>
  );
};

export default Dashboard;

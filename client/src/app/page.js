import Link from "next/link";


export default function Home() {
  return (
    
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl mb-2">Advocate Diary</h1>
      <p className="mb-2">Login your Diary</p>
      <label className="input mb-2 input-bordered flex items-center gap-2">
        Phone No
        <input type="text" className="grow" placeholder="Enter Phone Number" />
      </label>
      <label className="input mb-2 input-bordered flex items-center gap-2">
        Password
        <input type="password" className="grow" placeholder="Enter password" />
      </label>
      <h3>Want to register a diary? <Link href="/Registration">Register</Link></h3>
    </div>
  );
}

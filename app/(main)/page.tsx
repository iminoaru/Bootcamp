import {UserButton} from "@clerk/nextjs";


export default function Home() {
  return (
    <main>
        <div>
            <UserButton afterSignOutUrl = '/' />
        </div>
      <h1>Bootcamp home page</h1>
        </main>
  );
}

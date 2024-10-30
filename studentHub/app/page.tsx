import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-blue-600">home page</h1>
      <Link href="/registration" className="mr-5">register</Link>
      <Link href="/login">login</Link>
    </>
  );
}

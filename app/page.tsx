"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/Home"); // Use "/Home" if your folder is capitalized
  }, [router]);

  return <div>Redirecting...</div>;
};

export default Page;

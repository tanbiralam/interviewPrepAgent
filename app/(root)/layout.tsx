import React from "react";

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import { isAuthenticated } from "@/lib/actions/auth.auction";
import { redirect } from "next/navigation";
import { UserNav } from "@/components/UserNav";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">Intervu</h2>
        </Link>
        <UserNav />
      </nav>
      {children}
      <Toaster />
    </div>
  );
};

export default Layout;

'use client'

import { signOut } from "@/lib/actions/auth.action";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  return (
    <Button
      variant="outline"
      className="flex items-center gap-2"
      onClick={async () => {
        await signOut();
        window.location.href = "/sign-in";
      }}
    >
      <LogOut size={16} />
      Logout
    </Button>
  );
}
"use client";

import { SessionProvider } from "next-auth/react";

export default function Provider({ childern, session }) {
  return <SessionProvider session={session}>{childern}</SessionProvider>;
}

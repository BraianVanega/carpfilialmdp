"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function GtmPageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    sendGTMEvent({ event: "page_view", page_path: pathname });
  }, [pathname, searchParams]);

  return null;
}

"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Home,
  Info,
  Sparkles,
  Download,
  Phone,
  X,
  ChevronRight,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

interface MobileNavProps {
  triggerButton: React.ReactNode;
}

export function MobileNav({ triggerButton }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{triggerButton}</SheetTrigger>
      <SheetContent side={"left"} className="w-[85vw] sm:w-[385px] p-0">
        <div className="flex flex-col h-full bg-background">
          <SheetHeader className="p-6 border-b">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-xl font-bold">
                <span className="text-blue-700 dark:text-blue-400">MY</span>{" "}
                <span className="text-green-500 dark:text-green-400">
                  DOCTOR
                </span>
              </SheetTitle>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
            </div>
          </SheetHeader>

          <div className="flex-1 overflow-auto py-4">
            <nav className="flex flex-col space-y-1 px-2">
              <Button
                variant="ghost"
                className="justify-start h-12 px-4"
                onClick={() => handleNavigation("#")}
              >
                <Home className="mr-3 h-5 w-5 text-green-500" />
                <span>Home</span>
                <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
              </Button>

              <Button
                variant="ghost"
                className="justify-start h-12 px-4"
                onClick={() => handleNavigation("#about")}
              >
                <Info className="mr-3 h-5 w-5 text-green-500" />
                <span>About</span>
                <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
              </Button>

              <Button
                variant="ghost"
                className="justify-start h-12 px-4"
                onClick={() => handleNavigation("#features")}
              >
                <Sparkles className="mr-3 h-5 w-5 text-green-500" />
                <span>Features</span>
                <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
              </Button>

              <Button
                variant="ghost"
                className="justify-start h-12 px-4"
                onClick={() => handleNavigation("#download")}
              >
                <Download className="mr-3 h-5 w-5 text-green-500" />
                <span>Download</span>
                <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
              </Button>

              <Button
                variant="ghost"
                className="justify-start h-12 px-4"
                onClick={() => handleNavigation("#contact")}
              >
                <Phone className="mr-3 h-5 w-5 text-green-500" />
                <span>Contact</span>
                <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
              </Button>
            </nav>
          </div>

          <div className="p-6 border-t">
            <Button
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-md shadow-green-500/20 dark:shadow-green-900/20"
              onClick={() => handleNavigation("/#download")}
            >
              <Download className="mr-2 h-4 w-4" /> Download Now
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

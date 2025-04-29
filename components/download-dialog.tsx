import { formatDistance } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface DownloadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  launchDate: number;
}

export default function DownloadDialog({
  open,
  onOpenChange,
  launchDate,
}: DownloadDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            My Doctor App - Launching Soon!
          </DialogTitle>
          <DialogDescription>
            Our app will be available on May 15, 2025. Get ready for seamless
            healthcare at your fingertips!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-green-500 to-blue-600 p-[3px]">
              <div className="h-full w-full rounded-full bg-white dark:bg-gray-900 p-2">
                <Image
                  src="/logo.svg?height=80&width=80&text=MD"
                  alt="My Doctor Logo"
                  width={80}
                  height={80}
                  className="object-contain rounded-full"
                  priority
                />
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Stay updated by following us on social media or checking back
                here.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

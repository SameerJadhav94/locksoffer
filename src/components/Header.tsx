import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Header() {
  return (
    <header className="relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Locksoffer
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Transform your lock screen into rewards
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-black hover:bg-black/90 text-white flex items-center gap-2 py-6"
            >
              <Download className="h-5 w-5" />
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 hover:bg-primary/5 flex items-center gap-2 py-6"
            >
              <Download className="h-5 w-5" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
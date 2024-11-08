import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, ArrowRight } from "lucide-react";

export function MainContent() {
  return (
    <article className="prose prose-lg dark:prose-invert mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
        Revolutionizing Mobile Advertising
      </h2>
      
      <div className="space-y-6">
        <p className="text-gray-600 dark:text-gray-300">
          Locksoffer is an innovative advertising platform that revolutionizes the way brands connect 
          with consumers. Our app transforms users' lock screens into a valuable marketing space, 
          displaying curated ads, coupons, vouchers, and deals that are tailored to individual preferences.
        </p>

        <div className="my-12 grid gap-8 md:grid-cols-2">
          <Card className="p-6 group hover:border-primary/50 transition-colors">
            <div className="rounded-xl bg-primary/10 p-3 w-fit mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">For Brands</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                High-visibility advertising space
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                Real-time campaign analytics
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                Targeted audience reach
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                Performance tracking
              </li>
            </ul>
          </Card>

          <Card className="p-6 group hover:border-primary/50 transition-colors">
            <div className="rounded-xl bg-primary/10 p-3 w-fit mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">For Users</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                Exclusive discounts and deals
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                Personalized offers
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                Secure and private
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                Easy reward redemption
              </li>
            </ul>
          </Card>
        </div>

        <p className="text-gray-600 dark:text-gray-300">
          Our business model capitalizes on a growing trend: people are looking for ways to save money 
          and brands are seeking innovative channels to reach customers. By bridging this gap, 
          Locksoffer provides significant savings for users while generating high engagement rates 
          for advertisers.
        </p>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl">
            Get Started Today
          </Button>
        </div>
      </div>
    </article>
  );
}
import { Card } from "@/components/ui/card";
import { Smartphone, Target, Gift } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Smartphone,
      title: "Smart Lock Screen Ads",
      description: "Transform idle moments into opportunities with personalized ads on your lock screen."
    },
    {
      icon: Target,
      title: "Targeted Marketing",
      description: "Reach the right audience with precision targeting and real-time analytics."
    },
    {
      icon: Gift,
      title: "Exclusive Rewards",
      description: "Earn rewards, coupons, and special offers just for using your phone."
    }
  ];

  return (
    <section className="mb-20">
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="group relative overflow-hidden p-6 hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="rounded-xl bg-primary/10 p-3 w-fit mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
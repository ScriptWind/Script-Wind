import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubscribed(true);
    
    toast({
      title: "🎉 Successfully Subscribed!",
      description: "Thank you for subscribing to our newsletter. You'll receive updates about our latest projects and insights.",
      className: "border-primary/20 bg-primary/5",
    });

    // Reset after animation
    setTimeout(() => {
      setEmail("");
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <div className="bg-tech-gradient p-8 rounded-xl text-white">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
        <p className="text-white/80">
          Subscribe to our newsletter for the latest updates, tips, and exclusive insights.
        </p>
      </div>

      {isSubscribed ? (
        <div className="text-center py-8 animate-bounce-letters">
          <CheckCircle className="w-16 h-16 mx-auto mb-4 animate-bounce" />
          <h4 className="text-xl font-bold mb-2">Subscribed!</h4>
          <p className="text-white/80">You'll hear from us soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white focus:bg-white/20"
            />
          </div>
          <Button
            type="submit"
            variant="secondary"
            disabled={isSubmitting || !email}
            className="bg-white text-primary hover:bg-white/90 min-w-[140px]"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin w-4 h-4 border-2 border-primary border-t-transparent rounded-full mr-2" />
                Subscribing...
              </>
            ) : (
              <>
                Subscribe
                <Mail className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
};
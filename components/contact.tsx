import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter mb-4">Get in Touch</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="border bg-secondary/50">
          <CardHeader>
            <CardTitle className="tracking-tighter">Contact Me</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Input type="text" placeholder="Your Name" className="bg-background" />
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="Your Email" className="bg-background" />
              </div>
              <div className="space-y-2">
                <Textarea 
                  placeholder="Your Message" 
                  className="min-h-[150px] bg-background" 
                />
              </div>
              <Button className="w-full">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:your.email@example.com" className="hover:text-primary transition-colors">
                  your.email@example.com
                </a>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                <span className="text-muted-foreground">
                  Available for freelance opportunities
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

export function About() {
  const features = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code is my priority.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Modern Design",
      description: "Creating beautiful and responsive user interfaces.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Fast Learner",
      description: "Always eager to learn new technologies and best practices.",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter mb-4">About Me</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I'm a frontend developer focused on building responsive and user-friendly
          web applications. My journey in web development started with a passion
          for creating beautiful user experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border bg-secondary/50">
            <CardContent className="p-6 text-center">
              <div className="mb-4 inline-block p-3 bg-background rounded-xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
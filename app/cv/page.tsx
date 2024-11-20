import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

export default function CVPage() {
  return (
    <div className="min-h-screen p-8 md:pl-72">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold tracking-tight">Curriculum Vitae</h1>
          <Button>
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>
        </div>

        <Card className="border bg-secondary/50">
          <CardContent className="p-6 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Frontend Developer</h3>
                      <p className="text-sm text-muted-foreground">Company Name</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2023 - Present</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Developed responsive web applications using React and Next.js.
                    Implemented modern UI/UX designs with Tailwind CSS.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Computer Science</h3>
                      <p className="text-sm text-muted-foreground">University Name</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2019 - 2023</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Bachelor's degree with focus on web development and software engineering.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Frontend</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Tools</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Git</li>
                    <li>VS Code</li>
                    <li>Figma</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Soft Skills</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Problem Solving</li>
                    <li>Communication</li>
                    <li>Team Work</li>
                  </ul>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
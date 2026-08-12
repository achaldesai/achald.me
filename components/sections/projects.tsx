import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Todo, MaybeTodo } from "@/components/todo";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16">
      <h2 className="text-sm font-mono uppercase tracking-wide text-muted-foreground">
        Projects
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>
                <MaybeTodo value={project.title} />
              </CardTitle>
              <CardDescription>
                <MaybeTodo value={project.description} />
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="outline">
                  <MaybeTodo value={tech} />
                </Badge>
              ))}
            </CardContent>
            <CardFooter>
              {project.link ? (
                <a
                  href={project.link}
                  className="text-sm underline underline-offset-4"
                >
                  View project
                </a>
              ) : (
                <span className="text-sm">
                  <Todo>TODO: add link</Todo>
                </span>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

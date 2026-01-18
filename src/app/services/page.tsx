import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Our Core Solutions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We provide a comprehensive suite of services to create fully integrated, intelligent environments.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary rounded-lg">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

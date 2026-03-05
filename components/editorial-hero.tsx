import { Badge } from "@/components/ui/badge";

interface EditorialHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

export function EditorialHero({ badge, title, subtitle, imageSrc, imageAlt, children }: EditorialHeroProps) {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50/50 dark:from-amber-950/20 dark:to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image side */}
          {imageSrc && (
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${imageSrc}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          )}

          {/* Text side */}
          <div className={imageSrc ? "order-1 lg:order-2" : "col-span-2 max-w-3xl mx-auto text-center"}>
            {badge && (
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" variant="secondary">
                {badge}
              </Badge>
            )}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              {subtitle}
            </p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

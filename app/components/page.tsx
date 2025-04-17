import { Button, Card, Input, Badge } from ".";

export default function ComponentsPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Component Examples</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Button</h2>
          <Button />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Card</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card />
            <Card />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Input</h2>
          <div className="space-y-4">
            <Input />
            <div className="flex items-center gap-2">
              <Input />
              <Badge />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

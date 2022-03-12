import { Button } from "@acme/core";
import { useIsomorphicLayoutEffect } from "@acme/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("Acme docs page");
  }, []);
  return (
    <div>
      <h1 key="">Acme Documentation</h1>
      <Button key="">Click me</Button>
    </div>
  );
}

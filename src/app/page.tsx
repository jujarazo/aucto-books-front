import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>Hello, world</p>
        <Button>Click me</Button>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mt-4">
        <Input />
      </div>
    </div>
  );
}

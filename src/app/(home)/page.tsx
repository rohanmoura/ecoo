import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full bg-rose-600
    flex flex-col justify-center items-center">
      <Button variant={"elevated"}>
        Hello
      </Button>
    </div>
  );
}

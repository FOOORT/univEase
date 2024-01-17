import Welcome from "@/src/components/Welcome/Welcome";
import SlideCard from "@/src/components/Slide/SlideCard";
export default function Home() {
  return (
    <main className="w-full">
      <Welcome />
      <SlideCard />
    </main>
  );
}

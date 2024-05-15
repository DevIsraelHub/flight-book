import MainLayout from "@/components/MainLayout";
import HomePage from "@/modules/Home";

export default function Home() {
  return (
    <MainLayout classNames="w-full h-full">
      <HomePage />
    </MainLayout>
  );
}

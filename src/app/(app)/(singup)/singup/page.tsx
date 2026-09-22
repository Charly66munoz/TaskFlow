import { Navbar } from "@/components/pages/landing";
import SignupForm from "@/components/pages/SignupForm";

export default function HomePage() {
  return (
    <main>
      <Navbar itShow={false} />
      <SignupForm />
    </main>
  );
}
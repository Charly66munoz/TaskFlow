import { Navbar } from "@/components/pages/landing";
import SignupForm from "@/components/pages/forms/SignupForm";

export default function SingUp() {
  return (
    <main>
      <Navbar itShow={false} />
      <SignupForm />
    </main>
  );
}
import Logo from "@/components/Logo/Logo";
import Link from "next/link";

export default function TopBar() {
  return (
    <>
      <div className="container  py-6 mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex gap-6">
          <Link className="font-semibold" href="/">
            Acomodações
          </Link>
          <Link className="opacity-60" href="/">
            Experiências
          </Link>
        </div>
        <button className="rounded-md border-2">Entrar</button>
      </div>
    </>
  );
}

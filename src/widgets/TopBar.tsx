import Logo from "@/components/Logo";
import Link from "next/link";
import IconButton from "@/components/IconButton";
import { IconUserCircle } from "@tabler/icons-react";

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
        <IconButton
          icon={<IconUserCircle aria-label="Ícone de usuário" size={20} />}
        >
          Entrar
        </IconButton>
      </div>
    </>
  );
}

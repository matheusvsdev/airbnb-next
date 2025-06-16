import Logo from "@/components/Logo";
import Link from "next/link";
import { IconWorld, IconMenu2, IconHome, IconAirBalloon, IconSchoolBell } from "@tabler/icons-react";
import CircleButton from "@/components/CircleButtons";
import LinkButton from "@/components/LinkButton";

export default function TopBar() {
  return (
    <>
      <div className="py-6 flex justify-between items-center">
        <Logo />
        <div className="flex gap-8 ml-40">
          
          <LinkButton
            icon={<IconHome aria-label="Ícone casa" size={32} />}
            children="Acomodações"
            color="#1D9A6F"
            active={true}
          />
      
          <LinkButton
            icon={<IconAirBalloon aria-label="Ícone experiências" size={32} />}
            children="Experiências"
            color="red"
            active={false}
          />

          <LinkButton
            icon={<IconSchoolBell aria-label="Ícone serviços" size={32} />}
            children="Serviços"
            color="#ffb703"
            active={false}
          />

        </div>
        <div className="flex items-center gap-4">
          <Link className="font-semibold text-sm hover:bg-gray-100 p-3 rounded-full" href="/">
            Torne-se um anfitrião
          </Link>
          <div className="flex items-center gap-2">
            <CircleButton
              icon={<IconWorld aria-label="Ícone de usuário" size={20} />}
            >
            </CircleButton>
            <CircleButton
              icon={<IconMenu2 aria-label="Ícone de usuário" size={20} />}
            >
            </CircleButton>
          </div>
        </div>
      </div>
    </>
  );
}

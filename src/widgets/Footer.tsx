import Link from "next/link";

export default function Footer() {
  return (
    <div className="container mx-auto py-8">
      <span className="flex text-lg pb-4 justify-center">&copy; AirBnb INC</span>
      <ul className="flex flex-row gap-2 justify-center">
        <li>
          <Link className="hover:text-red-500" href="/">
            Privacidade
          </Link>
        </li>
        <li>&middot;</li>
        <li>
          <Link className="hover:text-red-500" href="/">
            Termos
          </Link>
        </li>
        <li>&middot;</li>
        <li>
          <Link className="hover:text-red-500" href="/">
            Mapa do site
          </Link>
        </li>
        <li>&middot;</li>
        <li>
          <Link className="hover:text-red-500" href="/">
            Informações da empresa
          </Link>
        </li>
      </ul>
    </div>
  );
}

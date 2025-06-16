import TopBar from "@/widgets/TopBar";

export default function Home() {
  return (
    <>
      <header>
        <TopBar />
      </header>
      <hr />
      <div className="border-green-600 border-2">Área conteúdos</div>
      <div className="border-blue-600 border-2">Rodapé</div>
    </>
  );
}

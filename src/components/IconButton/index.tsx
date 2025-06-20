interface IconButtonProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function IconButton(props: IconButtonProps) {
  return (
    <>
      <button className="rounded-xl border-2 flex items-center gap-2 py-1 px-3 cursor-pointer transition-colors duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white">
        <span>{props.icon}</span>
        <span>{props.children}</span>
      </button>
    </>
  );
}

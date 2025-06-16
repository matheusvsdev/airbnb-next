interface CircleButtonProps {
  icon: React.ReactNode;
}

export default function CircleButton(props: CircleButtonProps) {
  return (
    <>
      <button className="rounded-full bg-gray-100 flex items-center p-3 cursor-pointer hover:bg-gray-200">
        {props.icon}
      </button>
    </>
  );
}

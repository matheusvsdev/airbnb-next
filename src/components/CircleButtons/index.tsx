interface CircleButtonProps {
  icon: React.ReactNode;
}

export default function CircleButton(props: CircleButtonProps) {
  return (
    <>
      <button className="rounded-full bg-gray-50 flex items-center p-3 cursor-pointer hover:bg-gray-100">
        {props.icon}
      </button>
    </>
  );
}

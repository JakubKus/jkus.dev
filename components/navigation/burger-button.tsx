type Props = {
  active: boolean;
  onClick: () => void;
};

function BurgerButton({ active, onClick }: Props) {
  const burgerClasses = 'xl:hidden flex relative items-center border-b-2 border-t-2 border-white box-border h-3.5 w-5 before:bg-white before:h-0.5 before:w-full ml-auto';
  const closeClasses = 'xl:hidden flex relative items-center box-border h-5 w-5 before:bg-white before:h-0.5 before:w-full before:rotate-45 after:absolute after:bg-white after:h-0.5 after:w-full after:-rotate-45 ml-auto';

  return (
    <button
      className={active ? closeClasses : burgerClasses}
      onClick={onClick}
    />
  );
}

export default BurgerButton;

type Props = {
  active: boolean;
  onClick: () => void;
};

const responsiveButtonClass = 'desktop:hidden flex relative items-center box-border w-5 ml-auto'

const burgerClasses = `${responsiveButtonClass} h-3.5
border-b-2 border-t-2 border-white
before:bg-white before:h-0.5 before:w-full`;

const closeClasses = `${responsiveButtonClass} h-5
before:bg-white before:h-0.5 before:w-full before:rotate-45
after:absolute after:bg-white after:h-0.5 after:w-full after:-rotate-45`;

function BurgerButton({ active, onClick }: Props) {
  return (
    <button
      className={active ? closeClasses : burgerClasses}
      onClick={onClick}
    />
  );
}

export default BurgerButton;

import { gradient } from "../../assets";

export const Gradient = () => {
  return (
    <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-20 mix-blend-screen pointer-events-none z-10">
      <div className="absolute top-3 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
        <img
          className="w-full"
          src={gradient}
          width={942}
          height={942}
          alt="Gradient"
        />
      </div>
    </div>
  );
};

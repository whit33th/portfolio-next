interface ProductCardProps {
  children: React.ReactNode;
  childrenBottom: React.ReactNode;
}

export default function ProductCard({ children, childrenBottom }: ProductCardProps) {
  return (
    <div className="rounded-3xl  bg-[#161616] border border-[#161616]">
      <div className="relative  overflow-hidden rounded-2xl bg-black ">
        {/* <img
          src={imageUrl}
          alt={title}
          className="transition duration-300 blur-0 aspect-video h-[14rem] rounded-2xl object-cover object-top group-hover:scale-105"
        /> */}
        {children}
      </div>

      <div className=" flex flex-col items-start p-2 ">{childrenBottom}</div>
    </div>
  );
}

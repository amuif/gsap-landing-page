import { data } from "@/lib/data";
import { Marquee } from "./ui/marquee";

const Margquee = () => {
  return (
    <Marquee className="w-full  flex flex-row gap-5">
      {data.map((item) => (
        <div key={item.id} className="flex items-center gap-4 p-4">
          <img
            src={item.image}
            alt={item.name}
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />
          <div></div>
        </div>
      ))}
    </Marquee>
  );
};

export default Margquee;

// interface PillProps {
//   label: string;
// }

// const Pill: React.FC<PillProps> = ({ label }) => (
//   <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
//     {label}
//   </span>
// );

// export default Pill;



// UPDATE



// const Pill: React.FC<{ title: string }> = ({ title }) => {
//   return (
//     <div className=" flex justify-center items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-full">
//       <p className=" text-sm ">{title}</p>
//     </div>
//   );
// };

// export default Pill;




//update

import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className=" flex justify-center  items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-full">
      <p className=" text-sm ">{title}</p>
    </div>
  )
}

export default Pill;


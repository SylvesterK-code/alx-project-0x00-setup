
// import Card from '@/components/Card';
// import Pill from '@/components/Pill';


// const Landing: React.FC = () => {
//   return (
//     <div>
//       <h1 className="text-xl font-extralight">Landing Page</h1> 
//       <Card />
//       <Card />
//       <Card />
//     </div>
//   );
// };

// export default Landing;


// import React from "react";
// import Button from "@/components/Button";

// const Landing: React.FC = () => {
//   return (
//     <div className="p-4 space-y-4">
//       <h1 className="text-xl font-extralight">Landing Page</h1>
      
//       <Button title="Small Button" styles="text-sm rounded-sm" />
//       <Button title="Medium Button" styles="text-base rounded-md" />
//       <Button title="Large Button" styles="text-lg rounded-full" />
//     </div>
//   );
// };

// export default Landing;



import Card from '@/components/Card';
import Pill from '@/components/Pill';
import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* Card Component */}
      <Card />
      <Card />

      {/* Button Components */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium">Reusable Buttons</h2>
        
        {/* Small buttons */}
        <div className="flex gap-4">
          <Button title="Small Rounded-sm" styles="text-sm px-4 py-1 rounded-sm" />
          <Button title="Small Rounded-md" styles="text-sm px-4 py-1 rounded-md" />
          <Button title="Small Rounded-full" styles="text-sm px-4 py-1 rounded-full" />
        </div>

        {/* Medium buttons */}
        <div className="flex gap-4">
          <Button title="Medium Rounded-sm" styles="text-base px-6 py-2 rounded-sm" />
          <Button title="Medium Rounded-md" styles="text-base px-6 py-2 rounded-md" />
          <Button title="Medium Rounded-full" styles="text-base px-6 py-2 rounded-full" />
        </div>

        {/* Large buttons */}
        <div className="flex gap-4">
          <Button title="Large Rounded-sm" styles="text-lg px-8 py-3 rounded-sm" />
          <Button title="Large Rounded-md" styles="text-lg px-8 py-3 rounded-md" />
          <Button title="Large Rounded-full" styles="text-lg px-8 py-3 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Landing;



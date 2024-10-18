import * as React from "react";
import ActionAreaCard from "./card";

export default function Technologies() {
  return (
    <div className="py-8">
      <h2 className="text-center text-4xl font-bold mb-8">
        Our Technologies
      </h2>
      <div className="flex justify-center flex-wrap gap-8 p-10">
        <ActionAreaCard 
          image="https://tse3.mm.bing.net/th?id=OIP.VF70pDXwrj1N5MD672fICQHaEK&pid=Api&P=0&h=180"
          title="General Kidney Analysis"
          description="Answer some basic questions to find out if your kidney is healthy"
        />
        <ActionAreaCard 
          image="https://tse1.mm.bing.net/th?id=OIP.b-ZIB8_xCuxBqmI_Lagh4wHaDm&pid=Api&P=0&h=180"
          title="Disease Analysis"
          description="If the previous test states your kidney is not healthy, identify if you have any kidney diseases"
        />
        <ActionAreaCard 
          image="https://tse2.mm.bing.net/th?id=OIP.Vb_ISef7DKY4lje7SGoYgQHaEL&pid=Api&P=0&h=180"
          title="Scan Analysis"
          description="Identify your problems and allow us to guide you in your treatment process"
        />
      </div>
    </div>
  );
}

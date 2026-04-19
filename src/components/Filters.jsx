import { useState } from "react";

export default function Filters({setFilter}){
return (
<div className="flex gap-4 justify-center mb-10">
<button className="px-4 py-2 bg-gray-800">All</button>
<button className="px-4 py-2 bg-gray-800">Power BI</button>
<button className="px-4 py-2 bg-gray-800">SQL</button>
<button className="px-4 py-2 bg-gray-800">Python</button>
</div>
);
}

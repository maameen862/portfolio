import { projects } from "../data/projects";

export default function Projects(){
return (
<section className="px-10 py-20 grid md:grid-cols-3 gap-6">
{projects.map((p,i)=>(
<div key={i} className="bg-gray-900 p-6 rounded-xl">
<h3 className="text-xl">{p.title}</h3>
<p className="text-gray-400 mt-2">{p.description}</p>
</div>
))}
</section>
);
}

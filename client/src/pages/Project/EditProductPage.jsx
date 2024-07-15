import { Link } from "react-router-dom";
import { getAllProjectsAPI } from "../../APIServices/projectAPI.js";
import { useQuery } from "@tanstack/react-query";

export default function EditProductPage() {
    const { data } = useQuery({
        queryKey: ["get-projects"],
        queryFn: () => getAllProjectsAPI(),
    });

    return (
        <section className="py-24 h-[80vh] lg:py-28 sm:px-10 lg:px-12 sm:mx-12 lg:mx-20">
            <h1 className="text-3xl font-medium text-center">Select Project to Edit</h1>
            <div className="p-8 flex flex-wrap gap-8">
                {data?.projects?.map((project, index) => (
                    <Link
                        key={index}
                        to={`/projects/edit-projects/${project.slug}`}
                        className=" bg-stone-300 mb-4 py-2 px-3 rounded-md hover:bg-stone-400">
                        <p>{project?.name}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}
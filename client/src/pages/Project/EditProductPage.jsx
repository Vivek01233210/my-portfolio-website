import { Link } from "react-router-dom";
import { getAllProjects } from "../../APIServices/projectAPI.js";
import { useQuery } from "@tanstack/react-query";

export default function EditProductPage() {
    const { isError, isLoading, data } = useQuery({
        queryKey: ["get-projects"],
        queryFn: () => getAllProjects(),
    });

    return (
        <section className="py-20 h-[80vh] lg:py-28 sm:px-10 lg:px-12 sm:mx-12 lg:mx-20">
            <h1 className="text-2xl text-center">Select Project to Edit</h1>
            <div className="p-8 flex gap-8">
                {data?.projects?.map((project, index) => (
                    <Link
                        key={index}
                        to={`/edit-projects/${project.slug}`}
                        className=" bg-stone-300 mb-4 py-2 px-3 rounded-md hover:bg-stone-400">
                        <p>{project?.name}</p>
                        {/* <p>{project.description}</p> */}
                    </Link>
                ))}
            </div>
        </section>
    )
}
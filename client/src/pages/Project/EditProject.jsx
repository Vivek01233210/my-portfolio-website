import { useEffect, useState } from "react"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './projectCSS.css';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProjectAPI, updateProjectAPI } from "../../APIServices/projectAPI.js";

const baseURL = import.meta.env.VITE_API_URL;

export default function EditProject() {
    const { slug } = useParams();

    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [project, setProject] = useState(
        {
            name: '',
            slug: '',
            liveUrl: '',
            githubUrl: '',
            images: [],
            cardDescription: '',
            description: '',
        }
    )

    const { data } = useQuery({
        queryKey: ["post-details"],
        queryFn: () => getProjectAPI(slug),
    });

    useEffect(() => {
        if (data) {
            setProject({
                name: data.name || '',
                slug: data.slug || '',
                liveUrl: data.liveUrl || '',
                githubUrl: data.githubUrl || '',
                images: data.images || [],
                cardDescription: data.cardDescription || '',
                description: data.description || '',
            });
        }
    }, [data]);

    const updateMutation = useMutation({
        mutationFn: (projectData) => updateProjectAPI(slug, projectData),
        onSuccess: () => {
            queryClient.invalidateQueries("get-projects");
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        updateMutation
            .mutateAsync(project)
            .then(() => navigate('/projects'))
            .catch((err) => console.log(err));
    }

    return (
        <section className='py-20 lg:py-28 sm:px-10 lg:px-12 sm:mx-12 lg:mx-20'>
            <h1 className="text-3xl font-medium text-center mb-4">Edit Project</h1>
            <div className="bg-white p-4 rounded-lg">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="text-right">
                        <button className="bg-stone-300 hover:bg-stone-400 text-xl px-4 py-2 rounded-md">Save</button>
                    </div>
                    <div>
                        <label htmlFor="name" className="text-xl font-medium">Project Title:</label>
                        <input
                            type="text"
                            required
                            id="name"
                            className="w-full border-[1px] border-gray-300 rounded-md p-1"
                            value={project?.name}
                            onChange={(e) => {
                                setProject(prev => ({ ...prev, name: e.target.value }));
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="slug" className="text-xl font-medium">Slug:</label>
                        <input
                            type="text"
                            id="slug"
                            required
                            className="w-full border-[1px] border-gray-300 rounded-md p-1"
                            value={project?.slug}
                            onChange={(e) => {
                                setProject(prev => ({ ...prev, slug: e.target.value }));
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="live" className="text-xl font-medium">Live url:</label>
                        <input
                            type="text"
                            id="live"
                            className="w-full border-[1px] border-gray-300 rounded-md p-1"
                            value={project?.liveUrl}
                            onChange={(e) => {
                                setProject(prev => ({ ...prev, liveUrl: e.target.value }));
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="github" className="text-xl font-medium">GitHub url:</label>
                        <input
                            type="text"
                            id="github"
                            className="w-full border-[1px] border-gray-300 rounded-md p-1"
                            value={project?.githubUrl}
                            onChange={(e) => {
                                setProject(prev => ({ ...prev, githubUrl: e.target.value }));
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="images" className="text-xl font-medium">Images:</label>
                        <textarea
                            type="text"
                            id="images"
                            required
                            className="w-full h-40 border-[1px] border-gray-300 rounded-md p-1"
                            value={project?.images?.join(',\n')}
                            onChange={(e) => {
                                const newImages = e.target.value.split(',\n');
                                setProject(prev => ({ ...prev, images: newImages }));
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="card" className="text-xl font-medium">Project Card Description:</label>
                        <textarea
                            type="text"
                            id="card"
                            required
                            className="w-full border-[1px] border-gray-300 rounded-md p-1"
                            value={project?.cardDescription}
                            onChange={(e) => {
                                setProject(prev => ({ ...prev, cardDescription: e.target.value }));
                            }}
                        />
                    </div>

                    <div className="mb-14">
                        <label
                            htmlFor="description"
                            className="text-xl font-medium"
                        >
                            Description:
                        </label>
                        <ReactQuill
                            value={project?.description}
                            className="h-48"
                            required
                            onChange={(value) => {
                                setProject(prev => ({ ...prev, description: value }));
                            }}
                        />
                    </div>
                </form>

                {/* <div className="mt-16 mb-4">
                    <h2 className="text-xl font-medium">Generated HTML:</h2>
                    <div className="border-[1px] border-gray-300">
                        <p className="p-2">{project?.description}</p>
                    </div>
                </div> */}

                <div className="mt-16 mb-4">
                    <h2 className="mb-1 text-xl font-medium">Displayed Content</h2>
                    <div className="border-[1px] border-gray-300 px-2">
                        <div
                            className="rendered-html-content"
                            dangerouslySetInnerHTML={{ __html: project?.description }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
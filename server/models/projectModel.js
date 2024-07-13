import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide the project name"],
        },
        description: {
            type: String,
            required: [true, "Please provide the project description"],
        },
        cardDescription: {
            type: String,
            required: [true, "Please provide the project card description"],
        },
        slug: {
            type: String,
            required: [true, "Please provide the project slug"],
            unique: true,
        },
        images: {
            type: [String],
            required: [true, "Please provide the project images"],
        },
        githubUrl: {
            type: String,
        },
        liveUrl: {
            type: String,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.model("Project", ProjectSchema);

export default Project;
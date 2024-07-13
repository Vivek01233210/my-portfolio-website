import Project from "../models/projectModel.js";


// create a project
app.post('/api/v1/projects', async(req, res) => {
    const project = await Project.create(req.body);
    res.status(201).json(project);
});

// get all projects
app.get('/api/v1/projects', async(req, res) => {
    const projects = await Project.find({});
    res.status(200).json(projects);
});

// get a project
app.get('/api/v1/projects/:slug', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading the file' });
        }
        try {
            const jsonObject = JSON.parse(data);
            const project = jsonObject.projects.find(project => project.slug === req.params.slug);
            if (!project) {
                return res.status(404).json({ error: 'Project not found' });
            }
            res.status(200).json(project);
        } catch (parseErr) {
            res.status(500).json({ error: 'Error parsing JSON' });
        }
    });
});

// update a project
app.put('/api/v1/edit-projects/:slug', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading the file' });
        }
        try {
            const jsonObject = JSON.parse(data);
            const projectIndex = jsonObject.projects.findIndex(project => project.slug === req.params.slug);
            if (projectIndex === -1) {
                return res.status(404).json({ error: 'Project not found' });
            }

            jsonObject.projects[projectIndex] = req.body.project;

            fs.writeFile(filePath, JSON.stringify(jsonObject, null, 2), (writeErr) => {
                if (writeErr) {
                    return res.status(500).json({ error: 'Error writing the file' });
                }
                res.status(200).json({ message: 'Project updated' });
            });
        } catch (parseErr) {
            res.status(500).json({ error: 'Error parsing JSON' });
            console.log(parseErr)
        }
    });
});

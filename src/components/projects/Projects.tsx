import React, { useState, useEffect } from "react";
import style from "./projects.module.css";
import { Project } from "../project/Project";
import { workProjects } from "../workProjects";


export const Projects = () => {
    const [clientsCollection, setClientsCollection] = useState<String[]>([]);
    const [techCollection, setTechCollection] = useState<String[]>([]);

    useEffect(() => {
        const arrayOfClients: String[] = [];
        const arrayOfTech: String[] = [];

        workProjects.forEach(project => {
            project.clients.forEach(client => {
                if (!arrayOfClients.includes(client.name)) {
                    arrayOfClients.push(client.name);
                    setClientsCollection(arrayOfClients.sort());
                }
            })

            project.tags.forEach(tag => {
                if (!arrayOfTech.includes(tag)) {
                    arrayOfTech.push(tag);
                    setTechCollection(arrayOfTech.sort());
                }
            })
        })
    }, []);

    return (
        <div className={style.projects} id="projects">
            <main className="content">
                <div className={style.projects_header_wrapper}>
                    <h1 className={style.title}>
                        Work
                    </h1>
                    <div className={style.stats_text}>
                        <span className={style.highlight}>{workProjects.length}</span> projects
                    </div>
                    <div className={style.stats_text}>
                        Made for <span className={style.highlight}>{clientsCollection.length}</span> clients
                    </div>
                    <div className={style.stats_text}>
                        Using <span className={style.highlight}>{techCollection.length}</span> technologies
                    </div>
                </div>
                {workProjects.map((project, index) => (
                    <Project
                        key={index}
                        projectIndex={index}
                        title={project.title}
                        clients={project.clients}
                        role={project.role}
                        description={project.description}
                        img={project.img}
                        tags={project.tags}
                        cta={project.cta}
                        url={project.url}
                        left={project.left}
                    />
                ))}
            </main>
        </div>
    );
};

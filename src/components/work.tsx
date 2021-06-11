import React, { useState, useEffect } from 'react';

interface SysType {
  id: string;
  linkType: string;
  type: string;
}

interface PhotoType {
  sys: SysType;
}

interface FieldsProps {
  projectName: string;
  projectDescription: string;
  githubRepo: string;
  siteUrl: string;
  tags: string[];
  desktopImage: PhotoType;
  mobileImage: PhotoType;
}

interface ProjectProps {
  fields: FieldsProps;
}
interface ImageProps {
  projName: string;
  mobileImg: string;
  deskImg: string;
  description: string;
  siteURL: string;
  githubURL: string;
  tech: string[];
}

interface WorkProps {
  activeID: string;
}

const Work = () => {
  const [formattedProjects, setFormattedProjects] = useState<ImageProps[]>();
  const [activeProject, setActiveProject] = useState<ImageProps>();
  const url = 'https://cdn.contentful.com';
  const authToken = process.env.REACT_APP_AUTHORIZATION_TOKEN;
  const spaceID = 'v9ovjmjblfvv';

  // api to get project and asset details
  const projectAPI = async () => {
    if (authToken) {
      const response = await fetch(
        `${url}/spaces/${spaceID}/environments/master/entries?`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },

          method: 'GET',
        }
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        window.alert('nope');
      }
    }
  };

  const assetAPI = async (id: string) => {
    if (authToken) {
      const response = await fetch(
        `${url}/spaces/${spaceID}/environments/master/assets/${id}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          method: 'GET',
        }
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        window.alert('nope');
      }
    }
  };

  // gets raw project data from Contentful
  const getProjects = async () => {
    const apiResults = await projectAPI();
    const list = apiResults?.items;
    return list;
  };

  const getImageURL = async (id: string) => {
    const image = await assetAPI(id);
    let url = await image.fields.file.url;
    url = url.substring(2);
    return url;
  };

  // empty array - formatProjects pushes new entries

  const projArr: ImageProps[] = [];

  //   formats project details
  const formatProjects = async () => {
    const rawProjects = await getProjects();
    if (rawProjects) {
      for (let i = 0; i < rawProjects?.length; i++) {
        const mobileImgID = rawProjects[i].fields.mobileImage.sys.id;
        const deskImgID = rawProjects[i].fields.desktopImage.sys.id;
        const mobileImgUrl = await getImageURL(mobileImgID);
        const deskImgUrl = await getImageURL(deskImgID);
        const name = rawProjects[i].fields.projectName;
        const desc = rawProjects[i].fields.projectDescription;
        const site = rawProjects[i].fields.siteUrl;
        const github = rawProjects[i].fields.githubRepo;
        const tags = rawProjects[i].fields.tags;

        projArr.push({
          projName: name,
          mobileImg: mobileImgUrl,
          deskImg: deskImgUrl,
          description: desc,
          siteURL: site,
          githubURL: github,
          tech: tags,
        });
      }
      setFormattedProjects(projArr);
    }
  };

  useEffect(() => {
    formatProjects();
  }, []);

  useEffect(() => {
    if (formattedProjects?.length) {
      setActiveProject(formattedProjects[0]);
    }
  }, [formattedProjects]);

  const handleClick = (proj: string) => {
    const project = formattedProjects?.find(
      ({ projName }) => projName === proj
    );
    setActiveProject(project);
    console.log(activeProject);
  };

  const mappedNames = formattedProjects?.map((project) => (
    <div
      key={project.projName}
      id={project.projName}
      className="project-menu-item"
      onClick={() => handleClick(project.projName)}
    >
      {project.projName}
    </div>
  ));

  return (
    <div className="component" id="work">
      <div className="component-title">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1>What I've Made</h1>
      </div>
      <div className="component-body">
        <div className="project-menu">{mappedNames}</div>
        <div className="proj-left">
          <div className="proj-description">{activeProject?.description}</div>
          <div className="proj-tech">{activeProject?.tech}</div>
          <div className="proj-link-mobile">
            <span>{activeProject?.githubURL}</span>
            <span>{activeProject?.siteURL}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

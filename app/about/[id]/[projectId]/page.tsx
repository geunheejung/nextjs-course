"use client";

import { useParams } from "next/navigation";

const ProjectId = () => {
  const params = useParams();
  const { id, projectId } = params;
  console.log(params);
  return (
    <div>
      <h1>Project Name {id}</h1>
      <h2>Project Number {projectId}</h2>
    </div>
  );
};

export default ProjectId;

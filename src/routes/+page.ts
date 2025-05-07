import sanityClient, { processProjectEntries } from "$lib/utils/sanity"; //, { processProjectEntries }
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  const workExperience: SanityWorkExperience[] = await sanityClient.fetch(
    '*[_type == "devExperience"] | order(startDate desc)'
  );
  const rawProjects: SanityProject[] = await sanityClient.fetch(
    '*[_type == "project"] | order(dateAccomplished desc)'
  );
  const projects = rawProjects.map(processProjectEntries);

  const skills: Skill[] = await sanityClient.fetch(
    `*[_type == 'skills'][0].skillsList`
  );

  return {workExperience,projects,skills}

};
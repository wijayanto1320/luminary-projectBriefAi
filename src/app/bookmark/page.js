import { Brief } from "./_components/briefs";
import { getProjectBriefWithDetailsById } from "./actionGetBrief";

export default async function BorkmarkPage() {
  const projectBriefs = await getProjectBriefWithDetailsById();

  return <Brief projectBriefs={projectBriefs} />;
}

import Job from "@/components/Job";
const jobList = [
    {
        title: "E-mailmarketingspecialist",
        location: "Horsens",
        path: "/karriere/emailmarketingspecialist",
    },
    {
        title: "Kommunikationspraktikant",
        location: "Holstebro",
        path: "/karriere/kommunikationspraktikant",
    },
    {
        title: "Brand designer",
        location: "Horsens",
        path: "/karriere/brand-designer",
    },
    {
        title: "Digital brand designer",
        location: "Horsens",
        path: "/karriere/digital-brand-designer",
    },
] 

export function Jobs() {
  return (
    <div className="px-40 pt-40">
      <ul className="space-y-8">
        {jobList.map((job) => (
            <Job title={job.title} location={job.location} path={job.path} />
        ))}
      </ul>
    </div>
  );
}

export default Jobs;

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function Page() {
  const [jobFunction, setJobFunction] = useState("All");
  const [location, setLocation] = useState("All");
  const [workplaceType, setWorkplaceType] = useState("All");
  const [searchInput, setSearchInput] = useState("");

  const openings = [
    {
      title: "Frontend Engineer",
      function: "Engineering",
      description:
        "Build scalable React / Next.js platforms, reusable UI systems, responsive interfaces, performance optimization, and seamless user experiences across web applications.",
      experience: "2+ Years",
      location: "Bangalore",
      workplace: "Work From Office",
    },
    {
      title: "Project Manager",
      function: "Project Management",
      description:
        "Lead end-to-end project delivery, client communication, planning, execution tracking, stakeholder coordination, timelines, budgets, and successful enterprise outcomes.",
      experience: "5+ Years",
      location: "Pune",
      workplace: "Onsite",
    },
    {
      title: "Operations Executive",
      function: "Operations",
      description:
        "Manage business operations, workflow execution, reporting, process improvement, vendor coordination, productivity tracking, and operational excellence initiatives.",
      experience: "3+ Years",
      location: "Chennai",
      workplace: "Remote",
    },
    {
      title: "UI / UX Designer",
      function: "Designing",
      description:
        "Design modern user interfaces, wireframes, prototypes, design systems, user journeys, interaction flows, and engaging digital experiences.",
      experience: "2+ Years",
      location: "Mysore",
      workplace: "Work From Office",
    },
  ];

  const filteredJobs = useMemo(() => {
    const search = searchInput.trim().toLowerCase();

    return openings.filter((job) => {
      const matchesFunction =
        jobFunction === "All" ||
        job.function === jobFunction;

      const matchesLocation =
        location === "All" ||
        job.location === location;

      const matchesWorkplace =
        workplaceType === "All" ||
        job.workplace === workplaceType;

      const matchesSearch =
        search === "" ||
        job.title.toLowerCase().includes(search) ||
        job.function.toLowerCase().includes(search);

      return (
        matchesFunction &&
        matchesLocation &&
        matchesWorkplace &&
        matchesSearch
      );
    });
  }, [
    searchInput,
    jobFunction,
    location,
    workplaceType,
  ]);

  return (
    <main className="bg-transparent text-white px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
            Open Roles
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold">
            Current Opportunities
          </h1>
        </div>

        {/* Labels */}
        <div className="grid md:grid-cols-4 gap-4 mb-2 text-xs text-cyan-400 uppercase tracking-wider">
          <div>Job Function</div>
          <div>Location</div>
          <div>Workplace Type</div>
          <div>Search</div>
        </div>

        {/* Filters */}
        <div className="grid md:grid-cols-4 gap-4 mb-10">
          <select
            value={jobFunction}
            onChange={(e) => setJobFunction(e.target.value)}
            className="w-full bg-[#05070D] rounded-xl px-4 py-3 border border-white/10"
          >
            <option value="All">All</option>
            <option>Engineering</option>
            <option>Project Management</option>
            <option>Operations</option>
            <option>Designing</option>
          </select>

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-[#05070D] rounded-xl px-4 py-3 border border-white/10"
          >
            <option value="All">All</option>
            <option>Bangalore</option>
            <option>Mysore</option>
            <option>Pune</option>
            <option>Chennai</option>
          </select>

          <select
            value={workplaceType}
            onChange={(e) => setWorkplaceType(e.target.value)}
            className="w-full bg-[#05070D] rounded-xl px-4 py-3 border border-white/10"
          >
            <option value="All">All</option>
            <option>Remote</option>
            <option>Work From Office</option>
            <option>Onsite</option>
          </select>

          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search jobs..."
            className="w-full bg-[#05070D] rounded-xl px-4 py-3 border border-white/10"
          />
        </div>

        {/* Jobs */}
        <div className="space-y-5">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, i) => (
              <div
                key={i}
                className="bg-[#0B0F1A] rounded-2xl border border-white/10 p-6"
              >
                <div className="grid md:grid-cols-[1.4fr_1fr_auto] gap-6 items-start">
                  {/* Left */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {job.title}
                    </h3>

                    <div className="flex gap-3 flex-wrap text-sm mb-4">
                      <span className="bg-white/5 px-3 py-1 rounded-full">
                        {job.function}
                      </span>

                      <span className="bg-white/5 px-3 py-1 rounded-full">
                        {job.experience}
                      </span>

                      <span className="bg-white/5 px-3 py-1 rounded-full">
                        {job.location}
                      </span>

                      <span className="bg-white/5 px-3 py-1 rounded-full">
                        {job.workplace}
                      </span>
                    </div>

                    {/* Hover Trigger */}
                    <div className="group relative inline-block">
                      <button className="px-5 py-2 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition text-sm">
                        Job Description
                      </button>

                      {/* Description in Middle Space */}
                      <div className="absolute left-[490px] top-[-78px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 w-[600px] z-20">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Empty Middle Space */}
                  <div></div>

                  {/* Right */}
                  <Link
                    href={`/careers/apply?role=${encodeURIComponent(
                      job.title
                    )}`}
                    className="self-start bg-cyan-400 text-black px-6 py-3 rounded-xl font-medium hover:bg-cyan-300 transition"
                  >
                    Apply
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-100 py-12">
              No jobs found matching your search
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
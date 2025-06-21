import React from "react";

export default function ServicesAndEducation() {
  return (
    <div className="grid grid-cols-1 gap-8 pb-12 lg:grid-cols-2">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-neutral-200">What I Do</h3>
        <div className="grid gap-4">
          <div className="rounded-xl border border-[#191919] bg-[#0c0c0c] p-4">
            <p className="font-medium">Frontend Development</p>
            <p className="text-sm text-neutral-400">
              Building responsive and modern web apps
            </p>
          </div>
          <div className="rounded-xl border border-[#191919] bg-[#0c0c0c] p-4">
            <p className="font-medium">Web Performance</p>
            <p className="text-sm text-neutral-400">
              Optimizing for speed and efficiency
            </p>
          </div>
          <div className="rounded-xl border border-[#191919] bg-[#0c0c0c] p-4">
            <p className="font-medium">Testing</p>
            <p className="text-sm text-neutral-400">
              Creating reliable end-to-end tests
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-neutral-200">Education</h3>
        <div className="rounded-xl border border-[#191919] bg-[#0c0c0c] p-4">
          <p className="font-medium">
            Informatics (Faculty of Applied Sciences)
          </p>
          <p className="mt-1 text-sm text-neutral-400">Poznan, Poland</p>
          <p className="text-sm text-neutral-400">2021 - 2025</p>
        </div>
      </div>
    </div>
  );
}

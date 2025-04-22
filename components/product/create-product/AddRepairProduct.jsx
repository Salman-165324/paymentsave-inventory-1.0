"use client";

import { useState } from "react";
import MainCard from "@/components/ui/MainCard";
import CustomCard from "@/components/ui/CustomCard";
import AppSelect from "@/components/ui/AppSelect";
import AppButton from "@/components/ui/AppButton";
import { Trash2, Save } from "lucide-react";
import SearchableDropdown from "@/components/ui/SearchableDropdown";

export default function AddRepairProduct() {
  const [serial, setSerial] = useState(null);
  const [model, setModel] = useState(null);
  const [status, setStatus] = useState(null);
  const [comment, setComment] = useState("");

  const serialOptions = [
    { value: "1234565475", label: "1234565475" },
    { value: "1234565474", label: "1234565474" },
    { value: "1234565477", label: "1234565477" },
    { value: "1234565478", label: "1234565478" },
  ];

  const modelOptions = [
    { value: "A920 PRO", label: "A920 PRO" },
    { value: "A921 PRO", label: "A921 PRO" },
    { value: "A922 PRO", label: "A922 PRO" },
  ];

  const statusOptions = [
    { value: "Processing", label: "Processing" },
    { value: "In Repair", label: "In Repair" },
    { value: "Live Base", label: "Live Base" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({ serial, model, status, comment });
  };

  return (
    <MainCard title="Add in Repair" className="max-w-5xl mx-auto mt-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-6 mt-6"
      >
        {/* Left Form */}
        <div className="flex-1 space-y-6 mt-8">
          <SearchableDropdown
            label="Serial Number"
            required
            options={serialOptions}
            selected={serial}
            onChange={setSerial}
            placeholder="Serial Number"
          />

          <SearchableDropdown
            label="Model"
            required
            options={modelOptions}
            selected={model}
            onChange={setModel}
            placeholder="Model"
          />

          <SearchableDropdown
            label="Repair Status"
            required
            options={statusOptions}
            selected={status}
            onChange={setStatus}
            placeholder="Repair Status"
          />

          <div className="flex items-start gap-4">
            <label className="w-full md:w-[160px] pt-2 text-primary font-medium">
              Comment (if)
            </label>
            <textarea
              rows={3}
              placeholder="Comment here"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="text-secondary w-full border bg-white rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>

        {/* Right Product Overview */}
        <div className="flex-1">
          <h3 className="text-sm font-medium text-[#616262] mb-3 ml-1">
            Product Overview
          </h3>
          <CustomCard className="bg-white border border-gray-200 text-sm px-5 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-12">
              <div>
                <div className="text-primary">MID</div>
                <div className="text-secondary break-words">18142542351335</div>
              </div>
              <div>
                <div className="text-primary">Trading Name</div>
                <div className="text-secondary break-words">
                  Devsstream Store
                </div>
              </div>
              <div>
                <div className="text-primary">Product Model</div>
                <div className="text-secondary break-words">A920 PRO</div>
              </div>
              <div>
                <div className="text-primary">Product Category</div>
                <div className="text-secondary break-words">SIM</div>
              </div>
            </div>
          </CustomCard>
        </div>
      </form>

      {/* Bottom Action Buttons */}
      <div className="flex justify-end gap-2 mt-8">
        <AppButton
          text="Discard"
        //   icon={<Trash2 size={16} />}
          onClick={() => {
            setSerial(null);
            setModel(null);
            setStatus(null);
            setComment("");
          }}
          bg="bg-white"
          color="text-black"
          className="border border-white hover:bg-gray-200"
        />
        <AppButton
          type="submit"
          text="Save"
        //   icon={<Save size={16} />}
          bg="bg-blue-600"
          color="text-white"
          className="hover:bg-blue-700"
        />
      </div>
    </MainCard>
  );
}

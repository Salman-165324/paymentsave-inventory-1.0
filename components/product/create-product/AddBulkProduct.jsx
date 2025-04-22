"use client";
import { useState } from "react";
import Head from "next/head";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import MainCard from "@/components/ui/MainCard";

export default function BulkAddProduct() {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [previewData, setPreviewData] = useState([]);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleDownloadTemplate = () => {
    console.log("Downloading CSV template");
  };

  const handlePreview = () => {
    const file = files[0];
    if (!file) return;

    const reader = new FileReader();
    const extension = file.name.split(".").pop().toLowerCase();

    reader.onload = (e) => {
      const content = e.target.result;

      if (extension === "csv") {
        const result = Papa.parse(content, { header: true });
        setPreviewData(result.data);
      } else if (extension === "xlsx" || extension === "xls") {
        const workbook = XLSX.read(content, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet);
        setPreviewData(data);
      } else {
        alert("Unsupported file type");
      }
    };

    if (extension === "csv") {
      reader.readAsText(file);
    } else if (extension === "xlsx" || extension === "xls") {
      reader.readAsBinaryString(file);
    } else {
      alert("Unsupported file type");
    }
  };

  const handleSubmit = () => {
    console.log("Submitting files:", files);
  };

  return (
    <MainCard title={"Bulk Add Product"} className="max-w-3xl mx-auto ">
      <div>
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-3">
            <span className="text-primary text-[18px]">
              Don't have the template? Click Here*
            </span>
            <button
              onClick={handleDownloadTemplate}
              className="bg-[#1366D9] hover:bg-blue-600 text-white text-sm py-2 px-3 rounded cursor-pointer"
            >
              Download CSV Template
            </button>
          </div>
        </div>

        <div
          className={`border-2 border-[#A0A0A0] border-dashed rounded p-10 flex flex-col items-center justify-center cursor-pointer ${
            isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById("fileInput").click()}
        >
          <input
            id="fileInput"
            type="file"
            accept=".csv, .xlsx, .xls"
            multiple
            className="hidden"
            onChange={handleFileSelect}
          />

          <div className="text-center">
            <div className="mb-3">
              <svg
                className="w-12 h-12 mx-auto text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
            </div>
            <p className="text-[#616262] text-[18px]">
              Drag & drop files or browse
            </p>
          </div>
        </div>

        {files.length > 0 && (
          <div className="mt-4 text-sm text-gray-600">
            <p>
              {files.length} file(s) selected:{" "}
              {files.map((f) => f.name).join(", ")}
            </p>
          </div>
        )}

        <div className="flex justify-end mt-6 gap-2">
          <button
            onClick={handlePreview}
            className="border bg-[#F0F1F3] border-[#F0F1F3] text-[#858D9D] text-sm py-2 px-4 cursor-pointer rounded hover:bg-gray-50"
          >
            Preview
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[#1366D9] hover:bg-blue-600 text-white text-sm py-2 px-3 rounded cursor-pointer"
          >
            Submit
          </button>
        </div>

        {previewData.length > 0 && (
          <div className="mt-6 overflow-x-auto border rounded">
            <table className="min-w-full table-auto text-sm">
              <thead className="bg-gray-100">
                <tr>
                  {Object.keys(previewData[0]).map((key, index) => (
                    <th key={index} className="px-4 py-2 border">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {previewData.map((row, i) => (
                  <tr key={i} className="odd:bg-white even:bg-gray-50">
                    {Object.values(row).map((val, j) => (
                      <td key={j} className="px-4 py-2 border">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </MainCard>
  );
}

'use client'
import { useState } from 'react';
import Head from 'next/head';

export default function BulkAddProduct() {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

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
    // Logic to download CSV template
    console.log('Downloading CSV template');
  };

  const handlePreview = () => {
    // Logic to preview uploaded files
    console.log('Previewing files:', files);
  };

  const handleSubmit = () => {
    // Logic to submit files
    console.log('Submitting files:', files);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Head>
        <title>Bulk Add Product</title>
      </Head>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow-sm">
        <h1 className="text-xl font-medium text-gray-800 mb-6">Bulk Add Product</h1>
        
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">Don't have the template? Click Here*</span>
            <button 
              onClick={handleDownloadTemplate}
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-3 rounded"
            >
              Download CSV Template
            </button>
          </div>
        </div>
        
        <div 
          className={`border-2 border-dashed rounded p-10 flex flex-col items-center justify-center cursor-pointer ${
            isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('fileInput').click()}
        >
          <input
            id="fileInput"
            type="file"
            multiple
            className="hidden"
            onChange={handleFileSelect}
          />
          
          <div className="text-center">
            <div className="mb-3">
              <svg className="w-12 h-12 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
            </div>
            <p className="text-gray-500 text-sm">Drag & drop files or browse</p>
          </div>
        </div>
        
        <div className="flex justify-end mt-6 gap-2">
          <button 
            onClick={handlePreview}
            className="border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50"
          >
            Preview
          </button>
          <button 
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>

        {files.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-gray-600">{files.length} file(s) selected</p>
          </div>
        )}
      </div>
    </div>
  );
}
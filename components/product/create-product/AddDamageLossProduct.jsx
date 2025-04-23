'use client';

import { useState } from 'react';
import MainCard from '@/components/ui/MainCard';
import CustomCard from '@/components/ui/CustomCard';
import AppButton from '@/components/ui/AppButton';
import SearchableDropdown from '@/components/ui/SearchableDropdown'; // use the fixed version
import { Save, Trash2 } from 'lucide-react';

export default function AddDamageLossProduct() {
  const [serial, setSerial] = useState(null);
  const [status, setStatus] = useState(null);
  const [reason, setReason] = useState(null);
  const [comment, setComment] = useState('');

  const serialOptions = [
    { value: '1234565475', label: '1234565475' },
    { value: '1234565474', label: '1234565474' },
    { value: '1234565477', label: '1234565477' },
  ];

  const statusOptions = [
    { value: 'damaged', label: 'Damaged' },
    { value: 'lost', label: 'Lost' },
  ];

  const reasonOptions = [
    { value: 'shipping', label: 'Shipping Issue' },
    { value: 'handling', label: 'Improper Handling' },
    { value: 'returned', label: 'Customer Return' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      serial,
      status,
      reason,
      comment,
    };
    console.log('Submitting:', payload);
  };

  return (
    <MainCard title="Add Damage/Loss Product" className="max-w-4xl mx-auto mt-6">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-6 ">
        {/* Left Form */}
        <div className="flex-1 space-y-6 mt-8 text-sm ">
          <SearchableDropdown
            label="Product Serial"
            required
            options={serialOptions}
            selected={serial}
            onChange={setSerial}
            placeholder="Product Serial"
          />

          <SearchableDropdown
            label="Status (Lost/ Damaged)"
            required
            options={statusOptions}
            selected={status}
            onChange={setStatus}
            placeholder="Select Status"
          />

          <SearchableDropdown
            label="Reason"
            required
            options={reasonOptions}
            selected={reason}
            onChange={setReason}
            placeholder="Select or Add a new Reason"
          />

          {/* Comment */}
          <div className="flex items-start gap-4">
            <label className="w-full md:w-[160px] pt-2 text-primary font-medium">Comment (if)</label>
            <textarea
              placeholder="Comment here"
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="text-secondary w-full border bg-white rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>

        {/* Right Overview */}
        <div className="flex-1">
          <h3 className="text-sm font-medium text-[#616262] mb-3 ml-1">Product Overview</h3>
          <CustomCard className="bg-white border border-gray-200 text-sm px-5 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-12">
              <div>
                <div className="text-primary">MID</div>
                <div className="text-secondary break-words">18142542351335</div>
              </div>
              <div>
                <div className="text-primary">Trading Name</div>
                <div className="text-secondary break-words">Devsstream Store</div>
              </div>
              <div>
                <div className="text-primary">Product Model</div>
                <div className="text-secondary break-words">A920 PRO</div>
              </div>
              <div>
                <div className="text-primary">BDM Email</div>
                <div className="text-secondary break-words">zakaria@gmail.com</div>
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
     
          onClick={() => {
            setSerial(null);
            setStatus(null);
            setReason(null);
            setComment('');
          }}
          bg="bg-white"
          color="text-black"
          className="border border-white hover:bg-gray-200"
        />
        <AppButton
          type="submit"
          text="Update Status"
       
          bg="bg-blue-600"
          color="text-white"
          className="hover:bg-blue-700"
        />
      </div>
    </MainCard>
  );
}

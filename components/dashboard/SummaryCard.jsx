'use client';

const accessoryData = [
  { label: 'SIM', value: 50, color: '#3B82F6' },
  { label: 'Charging Base', value: 20, color: '#FB923C' },
  { label: 'Bluetooth Base', value: 70, color: '#22C55E' },
];

const damageData = [
  { label: 'Damage or Loss Products', value: 30, color: '#3B82F6' },
  { label: 'In-repair Terminals', value: 20, color: '#FB923C' },
];

export default function SummaryCard() {
  const accessoryTotal = accessoryData.reduce((sum, item) => sum + item.value, 0);
  const damageTotal = damageData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="p-5 rounded-2xl w-full space-y-6 bg-white shadow-[0px_4px_20px_0px_#00000040]">
      {/* Accessory Section */}
      <div>
        <div className="bg-[#43A2DA] text-white font-medium px-3 py-1 rounded-md w-full text-xl mb-2">
          Accessory Type
        </div>
        <p className="text-3xl font-bold text-[#19231F]">{accessoryTotal}</p>
        <div className="mt-3 space-y-2">
          {accessoryData.map((item, i) => (
            <div key={i} className="flex items-center justify-between text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                {item.label}
              </div>
              <span className="font-medium">({item.value})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Damage Section */}
      <div>
        <div className="bg-[#43A2DA] text-white font-medium px-3 py-1 rounded-md w-full text-xl mb-2">
          Damage & Lost Terminal
        </div>
        <p className="text-3xl font-bold text-[#19231F]">{damageTotal}</p>
        <div className="mt-3 space-y-2">
          {damageData.map((item, i) => (
            <div key={i} className="flex items-center justify-between text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                {item.label}
              </div>
              <span className="font-medium">({item.value})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

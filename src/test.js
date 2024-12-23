import React, { useState } from 'react';

const AgencySelector = () => {
  const [selectedAgencies, setSelectedAgencies] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const agencies = [
    { value: 'Police_CP', label: 'Police_CP', logo: '/images/police.png' },
    { value: 'LASEPA', label: 'LASEPA', logo: '/images/lasepa.png' },
    { value: 'FIRS', label: 'FIRS', logo: '/images/firs.png' },
    { value: 'LAWMA', label: 'LAWMA', logo: '/images/lawma.png' },
    { value: 'ESEVR', label: 'ESEVR', logo: '/images/esevr.png' },
  ];

  const handleCheckboxChange = (event, agency) => {
    if (event.target.checked) {
      setSelectedAgencies((prev) => [...prev, agency]);
    } else {
      setSelectedAgencies((prev) => prev.filter((item) => item.value !== agency.value));
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Select Input */}
      <div style={{ position: 'relative' }}>
        <div
         className='selectOfficials'
          onClick={toggleDropdown}
        >
          {selectedAgencies.length === 0 ? (
            <div>
                <p>Select Agency</p>
            </div>

          ) : (
            selectedAgencies.map((agency) => agency.label).join(', ')
          )}
        </div>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div
   className='selectDropdown'
          >
            {agencies.map((agency) => (
              <label
                key={agency.value}
             className='selectDropdown-label'
              >
                
               <span className="checkmark">{agency.label}</span>
                <input
                  type="checkbox"
                  value={agency.value}
                  checked={selectedAgencies.some((item) => item.value === agency.value)}
                  onChange={(event) => handleCheckboxChange(event, agency)}
                />{' '}
              </label>
            ))}
          </div>
        )}
      </div>

       {/* Logos of Selected Agencies */}
       <div style={{ display: 'flex' }}>
        {selectedAgencies.map((agency) => (
          <img
            key={agency.value}
            src={agency.logo}
            alt={agency.label}
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              marginRight: "-5px",
             
            }}
          />
        ))}
      </div> 
     
    </div>
  );
};

export default AgencySelector;

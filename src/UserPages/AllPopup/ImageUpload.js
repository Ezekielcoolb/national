import React, { useState } from 'react';


const ImageUpload = ({ onUpload }) => {
  const [dragging, setDragging] = useState(false);

  const handleFiles = (files) => {
    const validFiles = Array.from(files).filter(
      (file) => file.type === 'image/jpeg' || file.type === 'image/png'
    );
    if (validFiles.length > 0) {
      onUpload(validFiles);
    }
  };

  const handleImageUpload = (event) => {
    handleFiles(event.target.files);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    handleFiles(event.dataTransfer.files);
  };

  return (
    <div
      style={{
        border: '1px solid #1122401F',
        borderRadius: '10px',
        padding: '20px',
        width: '321px',
        backgroundColor: dragging ? '#f0f0f0' : '#ffffff',
        cursor: 'pointer',
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
    >
      {/* Use htmlFor to link label to input */}
      <label
        htmlFor="vehicle-image-upload"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          fontFamily: 'Roboto',
          fontSize: '12px',
          fontWeight: '400',
          color: '#667085',
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            background: '#F2F4F7',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src="/images/upload_icon.png" alt="upload" />
        </div>
        <p>
          <span style={{ color: '#56BF2A', fontWeight: '500' }}>Click to upload</span> or drag and drop
        </p>
        <p>JPG or PNG file format only</p>
      </label>
      <input
        id="vehicle-image-upload"
        type="file"
        accept="image/jpeg, image/png"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
        multiple
      />
    </div>
  );
};



export default ImageUpload;

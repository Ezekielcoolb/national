import React, { useState } from 'react';

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [dragging, setDragging] = useState(false);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files
      .filter((file) => file.type === 'image/jpeg' || file.type === 'image/png')
      .map((file) => {
        const reader = new FileReader();
        return new Promise((resolve) => {
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(file);
        });
      });

    Promise.all(newImages).then((loadedImages) => setImages((prev) => [...prev, ...loadedImages]));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);

    const files = Array.from(event.dataTransfer.files);
    const newImages = files
      .filter((file) => file.type === 'image/jpeg' || file.type === 'image/png')
      .map((file) => {
        const reader = new FileReader();
        return new Promise((resolve) => {
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(file);
        });
      });

    Promise.all(newImages).then((loadedImages) => setImages((prev) => [...prev, ...loadedImages]));
  };

  return (
    <div>
      {/* Upload Area */}
      <div
        style={{
            border:" 1px solid #1122401F",
          borderRadius: '10px',
          padding: '20px',
          display: "flex",
          width: '321px',
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: dragging ? '#ffffff' : '#ffffff',
          cursor: 'pointer',
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label
          style={{
            display: 'block',
            cursor: 'pointer',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap:"10px",
            fontFamily: "Roboto",
            fontSize: "12px",
            fontWeight: "400",
            color: "#667085"
          }}
        >

            <p style={{
                background: "#F2F4F7",
                borderRadius:"50%",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

            }}>
                <img src='/images/upload_icon.png' alt='' />
            </p>
          <p>
            <span style={{
        color: "#56BF2A",
        fontWeight: "500"
        }}>Click to upload</span> or drag and drop</p>
            <p>JPG or PNG file format only</p>
          <input
            type="file"
            accept="image/jpeg, image/png"
            multiple
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </label>
      </div>

      {/* Display Uploaded Images */}
      {images.length > 0 && (
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            width: "320px",
            gap: '6px',
            justifyContent: 'center',
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                width: '153px',
                height: '99px',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #ccc',
              }}
            >
              <img
                src={image}
                alt={`Uploaded ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;

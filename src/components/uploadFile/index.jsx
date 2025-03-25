import { useState, useRef, useEffect } from "react";
import { IconUpload, IconTrash } from "@tabler/icons-react";
import { ActionIcon, Text, useMantineTheme } from "@mantine/core";

export default function UploadFile({ value, label, onChange }) {
  const [imagePreview, setImagePreview] = useState(typeof value === "string" ? value : URL.createObjectURL(value));
  const fileInputRef = useRef(null);
  const { colors } = useMantineTheme();

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      onChange(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = (e) => {
    e.stopPropagation();
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }
    setImagePreview(null);
  };

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return (
    <>
      <Text fw="500" size="xs">
        {label}
      </Text>
      <div className="w-full max-w-md mx-auto">
        <div
          className="relative border border-gray-300 border-dashed rounded-lg overflow-hidden transition-colors duration-200 cursor-pointer group"
          onClick={handleUploadClick}
          style={{ height: "200px" }}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
          />

          {imagePreview ? (
            <>
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-contain"
              />

              {/* Trash Button */}
              <ActionIcon
                color="red"
                onClick={handleRemoveImage}
                pos="absolute"
                top={8}
                left={8}
                className=" opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50"
              >
                <IconTrash className="w-5 h-5" />
              </ActionIcon>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 flex items-center justify-center transition-opacity duration-200">
                <p className="text-white font-medium opacity-0 group-hover:opacity-100">
                  Click to change file
                </p>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-6 border-gray-300 hover:border-primary">
              <IconUpload className="w-8 h-8 text-gray-400 mb-2" />
              <p className="font-medium">Click to upload an image</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

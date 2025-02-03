"use client";

import React, { useState, useRef, useEffect } from "react";

const PhotoFrame: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<HTMLImageElement | null>(null);
  const [selectedShape, setSelectedShape] = useState<"original" | "square" | "circle">("original");
  const [showDownload, setShowDownload] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const frameImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Load the frame image
    const frameImg = new Image();
    frameImg.src = "/frame.png"; // Update this path to your frame image location
    frameImg.onload = () => {
      frameImageRef.current = frameImg;
      draw(); // Draw the initial frame without an image
    };
  }, []);

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target?.result && typeof event.target.result === 'string') {
          const img = new Image();
          img.onload = () => {
            setUploadedImage(img);
            setSelectedShape("original"); // Default to original shape
            setShowDownload(true);
            draw("original", img); // Immediately draw the uploaded image
          };
          img.src = event.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const draw = (shape: "original" | "square" | "circle" = selectedShape, image: HTMLImageElement | null = uploadedImage) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const frame = frameImageRef.current;

    if (!canvas || !ctx || !frame) return;

    // Clear the canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (image) {
      switch (shape) {
        case "original":
          canvas.width = image.width;
          canvas.height = image.height;

          // Draw the uploaded image
          ctx.drawImage(image, 0, 0);

          // Draw the frame
          const frameHeight = (frame.height / frame.width) * canvas.width;
          const frameY = canvas.height - frameHeight;
          ctx.drawImage(frame, 0, frameY, canvas.width, frameHeight);
          break;

        case "square":
          canvas.width = 2500;
          canvas.height = 2500;

          const hRatio = canvas.width / image.width;
          const vRatio = canvas.height / image.height;
          const ratio = Math.max(hRatio, vRatio);
          const centerX = (canvas.width - image.width * ratio) / 2;
          const centerY = (canvas.height - image.height * ratio) / 2;

          // Draw the uploaded image
          ctx.drawImage(
            image,
            0,
            0,
            image.width,
            image.height,
            centerX,
            centerY,
            image.width * ratio,
            image.height * ratio
          );

          // Draw the frame
          const frameHeightSquare = (frame.height / frame.width) * canvas.width;
          const frameYSquare = canvas.height - frameHeightSquare;
          ctx.drawImage(frame, 0, frameYSquare, canvas.width, frameHeightSquare);
          break;

        case "circle":
          canvas.width = 2500;
          canvas.height = 2500;

          // Create circular clipping path
          ctx.beginPath();
          ctx.arc(
            canvas.width / 2,
            canvas.height / 2,
            canvas.height / 2,
            0,
            Math.PI * 2
          );
          ctx.clip();

          // Fill with white background
          ctx.fillStyle = "#fff";
          ctx.fill();

          const circleHRatio = canvas.width / image.width;
          const circleVRatio = canvas.height / image.height;
          const circleRatio = Math.max(circleHRatio, circleVRatio);
          const circleCenterX = (canvas.width - image.width * circleRatio) / 2;
          const circleCenterY = (canvas.height - image.height * circleRatio) / 2;

          // Draw the uploaded image
          ctx.drawImage(
            image,
            0,
            0,
            image.width,
            image.height,
            circleCenterX,
            circleCenterY,
            image.width * circleRatio,
            image.height * circleRatio
          );

          // Draw the frame
          const circleFrameHeight = (frame.height / frame.width) * canvas.width;
          const circleFrameY = canvas.height - circleFrameHeight;
          ctx.drawImage(frame, 0, circleFrameY, canvas.width, circleFrameHeight);
          break;
      }
    } else {
      // Default canvas size and frame when no image is uploaded
      canvas.width = 2500;
      canvas.height = 2500;

      if (shape === "circle") {
        ctx.beginPath();
        ctx.arc(
          canvas.width / 2,
          canvas.height / 2,
          canvas.height / 2,
          0,
          Math.PI * 2
        );
        ctx.clip();
      }

      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const frameHeight = (frame.height / frame.width) * canvas.width;
      const frameY = canvas.height - frameHeight;
      ctx.drawImage(frame, 0, frameY, canvas.width, frameHeight);
    }
  };

  const handleShapeChange = (shape: "original" | "square" | "circle") => {
    setSelectedShape(shape);
    setTimeout(() => draw(shape), 0);
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "badge.png";
    a.click();
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8 max-w-7xl mx-auto relative mt-10">
      <div className="w-full md:w-1/2 space-y-6">
        <div>
          <h1 className="text-3xl font-bold dark:text-white light:text-black">Badge</h1>
          <p className="mt-2 text-gray-600 dark:text-[#e5e7eb] light:text-black">
            Upload an image and generate a personalized badge with the DevFest frame.
          </p>
        </div>

        <div>
          <p className="mb-4 dark:text-white light:text-black">Select an Image</p>
          <button
            onClick={triggerFileUpload}
            className="text-white px-6 py-3 bg-squidPink rounded-full border-[1px] light:border-black dark:border-white flex items-center gap-2 hover:bg-pink-700"
          >
            Upload Image
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        <div>
          <p className="mb-4 dark:text-white light:text-black">Image Shape</p>
          <div className="flex gap-1 border-[1px] light:border-black dark:border-white rounded-full p-1 w-fit dark:text-white light:text-black">
            {(["original", "square", "circle"] as const).map((shape) => (
              <button
                key={shape}
                onClick={() => handleShapeChange(shape)}
                className={`px-6 py-2 rounded-full capitalize ${
                  selectedShape === shape
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                } transition-colors hover:dark:bg-gray-400`}
              >
                {shape}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm dark:text-white light:text-black">
          * We respect your privacy and are not storing your pictures on our servers.
        </p>
      </div>

      <div className="w-full md:w-1/2">
        <div
          className={`bg-[#f3f4f680] p-8 text-center border-[1px] border-[#0f0f0f3b] ${
            selectedShape === "circle" ? "aspect-square" : "rounded-3xl"
          } dark:bg-[#3f3f3f3f]`}
        >
          <div className={selectedShape === "circle" ? "rounded-full overflow-hidden" : ""}>
            <canvas
              ref={canvasRef}
              className={`w-full sm:max-w-[80%] mx-auto ${
                selectedShape === "circle" ? "rounded-full" : "rounded-xl"
              }`}
            />
          </div>
          {showDownload && (
            <button
              onClick={downloadImage}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full flex items-center gap-2 mx-auto hover:bg-blue-600 transition-colors"
            >
              Download
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoFrame;


const setCanvasPreview=(
    image,
    canvas,
    crop
)=>{
    const ctx=canvas.getContext("2d");
    if (!ctx) {
        throw new Error("No 2d context")
    }
    
    const pixelRatio=window.devicePixelRatio;
    const scaleX=image.naturalWidth/image.width;
    const scaleY=image.naturalHeight/image.height;

    canvas.width=Math.floor(crop.width*scaleX*pixelRatio);
    canvas.height=Math.floor(crop.height*scaleY*pixelRatio);
    ctx.scale(pixelRatio,pixelRatio);
    ctx.imageSmoothingQuality="high";
    ctx.save();

    const cropX=crop.x*scaleX;
    const cropY = crop.y*scaleY;
    const dimensions={
        width:canvas.width,
        height:canvas.height
    }
    

    ctx.translate(-cropX,-cropY);
    ctx.drawImage(
        image,
        0,
        0,
        image.naturalWidth,
        image.naturalHeight,
        0,
        0,
        image.naturalWidth,
        image.naturalHeight,
    );

    ctx.restore();

    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
          if (!blob) return;
          const file = new File([blob], "cropped-image.jpg", { type: "image/jpeg" });
          const previewUrl = URL.createObjectURL(blob);

          resolve({file,previewUrl,dimensions});
        }, "image/jpeg");
      });
}

export default setCanvasPreview
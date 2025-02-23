import React, { useRef, useState } from "react";

function Profile() {
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const filePickerRef = useRef();
  const handleUserBgImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      console.log(URL.createObjectURL(file));
      setImageFileUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {};

  return (
    <>
      <div className="bg-amber-50 mx-auto p-3 w-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="file"
            id="inputImage"
            accept="image/*"
            onChange={handleUserBgImage}
            ref={filePickerRef}
            hidden
          />
          <div className="relative w-lg h-36 self-center cursor-pointer overflow-hidden" onClick={() => filePickerRef.current.click()}>
            <img src={imageFileUrl} alt="user" className="w-full absolute h-full object-cover" />
          </div>
          {/* <input type="text" id="username" placeholder="username" defaultValue={"hello world"}  /> */}
        </form>
      </div>
    </>
  );
}

export default Profile;

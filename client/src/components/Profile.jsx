import React, { useRef, useState } from "react";

function Profile() {
  const [bgimageFile, setBgImageFile] = useState(null);
  const [bgimageFileUrl, setBgImageFileUrl] = useState(null);
  const [uImageFile, setUImageFile] = useState(null);
  const [uImageFileUrl, setUImageFileUrl] = useState(null);
  const filePickerRef = useRef();
  const imagePickerRef = useRef();
  const defaultImage = "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg";
  const defaultBg = "https://wikitravel.org/upload/shared//6/6a/Default_Banner.jpg";

  const handleUserBgImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBgImageFile(file);
      setBgImageFileUrl(URL.createObjectURL(file));
    }
  };

  const handleUserImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUImageFile(file);
      setUImageFileUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {};

  return (
    <>
      <div className="bg-amber-50 mx-auto p-3 w-lg rounded-2xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 relative">
          <input
            type="file"
            id="inputImage"
            accept="image/*"
            onChange={handleUserBgImage}
            ref={filePickerRef}
            hidden
          />
          <div
            className="relative w-lg h-44 self-center cursor-pointer overflow-hidden rounded-tl-2xl rounded-tr-2xl bgImgP"
            onClick={() => filePickerRef.current.click()}
          >
            <img
              src={bgimageFileUrl || defaultBg}
              alt="user"
              className="w-full absolute h-full object-cover"
            />
          </div>
          <input
            type="file"
            name="userImage"
            accept="image/*"
            onChange={handleUserImage}
            ref={imagePickerRef}
            hidden
          />
          <div
            className="absolute w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full top-30"
            onClick={() => imagePickerRef.current.click()}
          >
            <img
              src={uImageFileUrl || defaultImage}
              alt=""
              className="rounded-full w-full h-full object-cover border-4 border-[lightgray]"
            />
          </div>
          <input
            type="text"
            id="username"
            placeholder="username"
            className="w-sm self-center ldvioclr rounded-lg mt-1.5 backdrop-blur-2xl bg-gradient-to-r from-purple-400 via-pink-600 to-indigo-500"
            defaultValue={"hello world"}
          />
          <input
            type="email"
            id="email"
            placeholder="email"
            className="w-sm self-center ldvioclr rounded-lg mt-1.5 bg-gradient-to-r from-purple-400 via-pink-600 to-indigo-500"
            defaultValue={"myemail@gmail.com"}
          />
          <input
            type="password"
            name="password"
            id="password"
            className="w-sm self-center ldvioclr rounded-lg mt-1.5 bg-gradient-to-r from-purple-400 via-pink-600 to-indigo-500 "
            placeholder="password"
          />
          <button type="submit" className="w-sm self-center h-10">Update</button>
        </form>
      </div>
    </>
  );
}

export default Profile;

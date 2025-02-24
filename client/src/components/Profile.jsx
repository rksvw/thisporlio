import React, { useEffect, useRef, useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { PiSignOutFill } from "react-icons/pi";

function Profile() {
  const [userData, setUserData] = useState({});
  const [imageSrc, setImageSrc] = useState("");
  const [bgimageFile, setBgImageFile] = useState(null);
  const [bgimageFileUrl, setBgImageFileUrl] = useState(null);
  const [uImageFile, setUImageFile] = useState(null);
  const [uImageFileUrl, setUImageFileUrl] = useState(null);
  const filePickerRef = useRef();
  const imagePickerRef = useRef();
  const defaultImage =
    "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg";
  const defaultBg =
    "https://wikitravel.org/upload/shared//6/6a/Default_Banner.jpg";

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (!data) {
      console.log("Error occured data");
      return;
    }
    if (data) {
      setUserData(data.data);
    }
    if (userData && userData.profile_picture) {
      const buffer = userData.profile_picture.data;
      const base64String = buffer.toString("base64");
      setUImageFileUrl(base64String);
    } else {
      setUImageFileUrl(defaultImage);
    }
  }, []);
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
      <div className="flex flex-col bg-amber-50 p-3 rounded-2xl">
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
          <div className="self-center relative inputContainer">
            <input
              type="text"
              id="username"
              placeholder="username"
              className="w-sm self-center ldvioclr rounded-lg mt-1.5 backdrop-blur-2xl bg-gradient-to-r outline-none from-violet-300 to-violet-500"
              defaultValue={userData.username}
            />
            <IoPersonCircle className="pIcon absolute"  />
          </div>
          <div className="self-center relative inputContainer">
            <input
              type="email"
              id="email"
              placeholder="email"
              className="w-sm self-center ldvioclr rounded-lg mt-1.5 backdrop-blur-2xl bg-gradient-to-r outline-none from-violet-300 to-violet-500"
              defaultValue={userData.email}
            />
            <MdEmail className="pIcon absolute" />
          </div>
          <div className="self-center relative inputContainer">
            <input
              type="password"
              name="password"
              id="password"
              className="w-sm self-center ldvioclr rounded-lg mt-1.5 backdrop-blur-2xl bg-gradient-to-r outline-none from-violet-300 to-violet-500"
              placeholder="password"
            />
            <MdOutlinePassword className="pIcon absolute" />
          </div>
          <div className="self-center relative inputContainer">
            <button type="submit" className="w-sm  self-center h-10 rounded-lg mt-1.5 backdrop-blur-2xl bg-gradient-to-r outline-none from-violet-300 via-[#cc00ff] to-violet-300" id="pSubmit">
            <IoIosSend className="pIcon absolute" />
              Update
            </button>
          </div>
          <div className="self-center relative inputContainer">
            <button type="submit" className="w-sm  self-center h-10 rounded-lg mt-1.5 backdrop-blur-2xl bg-gradient-to-r outline-none from-red-300 via-[#FFC300] to-red-300" id="pSignOut">
            <PiSignOutFill className="pIcon absolute" />
              logout
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Profile;

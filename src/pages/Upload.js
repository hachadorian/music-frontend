import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_MUT } from "../graphql/mutations/uploadSong";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";
import Error from "../components/Error";

const Upload = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const history = useHistory();

  const [upload] = useMutation(UPLOAD_MUT);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await upload({
      variables: { name: name, genre: genre, song: file },
    });
    if (res.data.uploadSong.__typename === "Errors") {
      return setError(res.data.uploadSong.message);
    }
    setName("");
    setGenre("");
    setFile(null);
    history.push("/home");
  };

  return (
    <div className="md:w-1/2 lg:w-1/4">
      <form onSubmit={handleSubmit}>
        <div className="py-2">
          <InputField
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            placeholder="Enter the name of song..."
          />
        </div>
        <div className="py-2">
          <InputField
            name="genre"
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            label="Genre"
            placeholder="Enter the genre of song..."
          />
        </div>
        <div className="py-2">
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
            </div>
          </div>
        </div>
        <Error message={error} />
        <Button text="Upload Song"></Button>
      </form>
    </div>
  );
};

export default Upload;

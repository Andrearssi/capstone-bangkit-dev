import db from "./config/firebaseService.js";

const uploadData = async (req, res) => {
  try {
    const collectionRef = db.collection("myCollection");

    // Data yang akan diunggah
    const data = {
      name: "John Doe 2",
      age: 30,
      email: "johndoe@example.com",
    };

    // Unggah data ke koleksi Firestore
    const docRef = await collectionRef.add(data);
    const uploadedData = {
      id: docRef.id,
      ...data,
    };

    console.log("Data berhasil diunggah");
    return res.json(uploadedData);
  } catch (error) {
    console.log("Error uploading data:", error);
    return res.status(500).json({ error: "Failed to upload data" });
  }
};

export default uploadData;

import React, { useRef, useState, useEffect } from "react";
import styles from "./Attachments.module.css";

import { paperClip, TimesNormal } from "../../../../assets/icons";
import Loader from "../../../Loader/Loader";

import { app } from "../../../../base";

const db = app.firestore();

const Attachments = (props) => {
  const filePicker = useRef();
  const [fileURL, setFileURL] = useState();
  const [orderImages, setOrderImages] = useState([]);
  const { isEditModeAllowed, orderId } = props;

  useEffect(() => {
    const fetchOrderUploads = async () => {
      let images = [];

      const uploadsCollection = await db
        .collection(`images`)
        .where("orderId", "==", orderId)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            images.push(doc.data());
          });
        });
      setOrderImages(images);
    };

    fetchOrderUploads();
  }, []);

  const selectFileHandler = async (e, orderId) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(`images/${orderId}/${file.name}`);
    await fileRef.put(file);
    await setFileURL(await fileRef.getDownloadURL());

    const data = {
      orderId: orderId,
      imageName: file.name,
      imageURL: await fileRef.getDownloadURL(),
    };

    let isNotDuplicate = 1;

    for (let image of orderImages) {
      if (image.imageName === file.name) isNotDuplicate *= 0;
    }

    if (isNotDuplicate) {
      setOrderImages([...orderImages, data]);
      await db
        .collection("images")
        .doc(orderId + "|" + file.name)
        .set(data);
    }
  };

  const deleteHandler = async (imageName, orderId) => {
    let storageRef = app.storage().ref();
    const fileRef = storageRef.child(`images/${orderId}/${imageName}`);

    await db
      .collection("images")
      .doc(orderId + "|" + imageName)
      .delete()
      .then(() => {
        fileRef.delete();
      })
      .then(() => {
        const filteredOrderImages = [...orderImages].filter(
          (order) => order.imageName !== imageName
        );
        setOrderImages(filteredOrderImages);
      });
  };

  return (
    <div className={styles.Attachments}>
      <input
        type="file"
        accept=".webp,.png, .jpg, .jpeg,.gif"
        disabled={isEditModeAllowed !== undefined ? !isEditModeAllowed : false}
        onChange={(e) => selectFileHandler(e, orderId)}
        ref={filePicker}
        style={{ display: "none" }}
      />
      <button
        onClick={() => filePicker.current.click()}
        className={styles.IconButton}
      >
        {paperClip}
      </button>
      <div className={styles.ImagesContainer}>
        {orderImages.length ? (
          orderImages.map((oi) => (
            <div key={oi.imageName} className={styles.ImageItem}>
              <p className={styles.ImageName}>{oi.imageName}</p>
              <button
                disabled={
                  isEditModeAllowed !== undefined ? !isEditModeAllowed : false
                }
                onClick={() => deleteHandler(oi.imageName, orderId)}
                className={styles.DeleteButton}
              >
                {TimesNormal}
              </button>
              <img
                className={styles.UploadedImage}
                src={oi.imageURL}
                alt={oi.imageURL}
              />
            </div>
          ))
        ) : (
          <div style={{ height: "1rem", width: "100%" }}>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default Attachments;

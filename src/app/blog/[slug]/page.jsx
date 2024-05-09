import React from "react";

import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            "https://images.pexels.com/photos/20993833/pexels-photo-20993833/free-photo-of-black-forest-2-shotoniphone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
          className={styles.img}
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src={
              "https://images.pexels.com/photos/20993833/pexels-photo-20993833/free-photo-of-black-forest-2-shotoniphone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            className={styles.avatar}
            width={50}
            height={50}
            alt="Author"
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          molestias ipsum similique non. Alias rem cum adipisci tenetur
          assumenda quod ipsam accusamus aliquid recusandae fugiat quisquam, sit
          corrupti porro perspiciatis.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;

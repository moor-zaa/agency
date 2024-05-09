import React from "react";

import styles from "./PostCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/20993833/pexels-photo-20993833/free-photo-of-black-forest-2-shotoniphone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="post"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor in
          consequuntur quia velit vel architecto praesentium quas dolorem
          repudiandae, blanditiis voluptas suscipit enim quos magnam adipisci
          qui odit perspiciatis?
        </p>
        <Link href={"/blog/post"} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

import React, { Suspense } from "react";

import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";

const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const post = await getData(params.slug);

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
        <h1 className={styles.title}>{post.title}</h1>
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
          <Suspense fallback={<div>Loading ...</div>}>
            <PostUser id={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;

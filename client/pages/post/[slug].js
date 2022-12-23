import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="p-20">
      <p>Post: {slug}</p>
    </div>
  );
};

export default Post;

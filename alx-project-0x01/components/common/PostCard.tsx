const PostCard: React.FC<{ title: string; body: string }> = ({ title, body }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-gray-600">{body}</p>
    </div>
  );
};

export default PostCard;

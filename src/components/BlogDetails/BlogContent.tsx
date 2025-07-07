interface BlogContentProps {
  paragraphs: string[];
}

const BlogContent: React.FC<BlogContentProps> = ({ paragraphs }) => {
  return (
    <div className="flex flex-col gap-3">
        {paragraphs.map((item,key) => (
          <p className="leading-6 text-grey01" key={key}>{item}</p>
        ))}
    </div>
  );
};

export default BlogContent;
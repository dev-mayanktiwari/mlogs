interface UnitBlogInput {
  title: string;
  body: string;
  date: string;
}

const UnitBlog = ({ title, body, date }: UnitBlogInput) => {
  return (
    <article className="mb-12">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <div className="text-muted-foreground text-sm mb-4">
        <span>{date}</span>
      </div>
      <div>{body}</div>
    </article>
  );
};

export { UnitBlog };
export type { UnitBlogInput };

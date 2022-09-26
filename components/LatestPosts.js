import PostCard from "./Cards/PostCard"
import { FadeInWhenVisible } from "./LatestWorks"

function LatestPosts({ data }) {
  return (
    <section id="posts" className="full-width">
    <div className="flex-row section-title">
    <h1 className="text-center">Latest Posts<hr /></h1>
    </div>
      <FadeInWhenVisible>
        <div className="flex-column">
          {data.map((item, index) => (
            <PostCard
              key={index}
              title={item.title}
              description={item.description}
              slug={item.slug}
              imageURL={item.image.data.attributes.url}
              category={item.category.data.attributes.name}
            />
          ))}
        </div>
      </FadeInWhenVisible>
    </section>
  )
}

export default LatestPosts

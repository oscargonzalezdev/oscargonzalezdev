import axios from "axios"
import PostCard from "./Cards/PostCard"
import { FadeInWhenVisible } from "./LatestWorks"

function LatestPosts({ data }) {
  return (
    <section id="works" className="full-width">
      <h1 className="text-center section-title">Latest Posts<hr /></h1>
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

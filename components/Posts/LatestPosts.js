import { useInView } from "framer-motion";
import moment from "moment";
import { useRef, useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import PostCard from "../Cards/PostCard"
import { FadeInWhenVisible } from "../Works/LatestWorks"

function LatestPosts({ data }) {

  const postsRef = useRef()
  const isInView = useInView(postsRef)
  const { elementInView, setElementInView } = useContext(DataContext)

  useEffect(() => {
    setElementInView({ ...elementInView, posts: isInView })
  }, [isInView])

  const date = moment(data.createdAt).format('ll');

  return (
    <section id="blog">
      <h3 className='section-title'>Latest Posts<hr /></h3>
      <FadeInWhenVisible>
        <div ref={postsRef}>
          {data.map((item, index) => (
            <PostCard
              key={index}
              title={item.title}
              description={item.description}
              slug={item.slug}
              imageURL={item.image.data.attributes.url}
              category={item.category.data.attributes.name}
              date={date}
            />
          ))}
        </div>
      </FadeInWhenVisible>
    </section>
  )
}

export default LatestPosts

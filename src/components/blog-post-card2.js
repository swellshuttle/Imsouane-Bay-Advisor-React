import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card2.css'

const BlogPostCard2 = (props) => {
  return (
    <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="blog-post-card2-image"
      />
      <div className="blog-post-card2-container">
        <div className="blog-post-card2-container1">
          <span className="blog-post-card2-text">{props.label}</span>
        </div>
        <h1 className="blog-post-card2-text1">{props.title}</h1>
        <span className="blog-post-card2-text2">{props.description}</span>
        <div className="blog-post-card2-container2">
          <div className="blog-post-card2-profile"></div>
          <span className="blog-post-card2-text3">Read More -&gt;</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  rootClassName: '',
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  title: 'Lorem ipsum dolor sit amet',
  image_alt: 'image',
  label: 'ENTERPRISE',
  when: '3 days ago',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  profile_alt: 'profile',
  author: 'Jane Doe',
}

BlogPostCard2.propTypes = {
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  profile_src: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
  label: PropTypes.string,
  when: PropTypes.string,
  image_src: PropTypes.string,
  profile_alt: PropTypes.string,
  author: PropTypes.string,
}

export default BlogPostCard2

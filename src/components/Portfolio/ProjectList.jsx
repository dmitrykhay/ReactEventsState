import "./Portfolio.css";

export const ProjectList = ({ arr }) => {
  
  return (
    <div className="projects">
      {arr.map((project, index) => {
        return <img key={index} className='image' src={project.img} alt={project.category}></img>
      })}
    </div>
  )
}

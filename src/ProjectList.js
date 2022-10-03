const ProjectList = ()=> {
  
  const projects = [
    {
      name: 'coding-n-kobolds',
      image: '../assets/projects/coding-n-kobolds.PNG',
      alt: 'coding-n-kobolds app demo',
      deployedLink: 'https://codingnkobolds.herokuapp.com/',
      githubLink: 'https://github.com/woodb58/coding-n-kobolds',
    },
    {
      name: 'gather-the-magic',
      image: '../assets/projects/gather-the-magic.PNG',
      alt: 'gather-the-magic app demo',
      deployedLink: 'https://gather-the-magic.herokuapp.com/',
      githubLink: 'https://github.com/patrickarcher414/gather-the-magic',
    },
    {
      name: 'meal-maker',
      image: '../assets/projects/meal-maker.PNG',
      alt: 'meal-maker app demo',
      deployedLink: 'https://patrickarcher414.github.io/meal-maker/',
      githubLink: 'https://github.com/patrickarcher414/meal-maker',
    },
  ]

  const projectList = projects.map((project)=> 
      <li>{project}</li>
    )
  
  return (
    <ul>{projectList}</ul>
  )
};
function AboutMe({names, titles, paragraph, image}){

    return(
        <>
            <h1>About Me</h1>
            <h2 className="decoration-wavy">This is some information about me!</h2>
            <p className="underline overline">{names}</p>
            <p className="font-sans">{titles}</p>
            <p>{paragraph}</p>
            <img src={image}/>


        </>
    )
};

export default AboutMe;
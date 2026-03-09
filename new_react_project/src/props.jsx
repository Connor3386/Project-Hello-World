function AboutMe({names, titles, paragraph, image}){

    return(
        <>
            <h1>About Me</h1>
            <h2 class="decoration-wavy">This is some information about me!</h2>
            <p class="underline overline">{names}</p>
            <p class="font-sans">{titles}</p>
            <p>{paragraph}</p>
            <img src={image}/>


        </>
    )
};

export default AboutMe;
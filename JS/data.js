window.onload = () => {
    postObj(objectives);
}

const objectives = [
    {
        image: "Quality Education.jpg",
        title: "Quality Education",
        paragraph: "We believe that education is important in nurturing children to become future leaders. We want every child to have equal learning opportunities which is essential for them to live and survive in this competitive era. We have faith in making these children have a brighter future and your support means a lot to them."
    },
    {
        image: "Zero Hunger.JPG",
        title: "Zero hunger",
        paragraph: "One of the most significant adverse effects of starvation is the stunting growth and poor brain development especially among children under the age of five. We want to diminish the prevalence of children having stunted growth by providng balanced diet to them regularly. These starving children need the help and support from all of us."
    },
    {
        image: "Medical Rescue.jpg",
        title: "Medical Rescue",
        paragraph: "People in poverty have the tendency of experiencing poor health due to the lack of financial capabilities to get medical treatments, consumption of an unbalanced diet as well as health illiteracy. We ought to provide medical treatments to those in needs and educate them to live a healthier lifestyle."
    }
]

const postObj = (objs) => {
    let objectiveContent = "";
    for(obj of objs){
        
        objectiveContent += `
        
            <div class="objective">
                <div class="obj-img">
                    <img src="./assets/${obj.image}" alt="">
                </div>
                <div class="obj-details">
                    <h3>${obj.title}</h3>
                    <p>${obj.paragraph}</p>
                </div>
            </div>

        `
    };
    document.querySelector('.objectives-div').innerHTML = objectiveContent;
};
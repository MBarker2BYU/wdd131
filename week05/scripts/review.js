const totalreviews = document.getElementById("total-reviews");

window.addEventListener("load", () => 
    {
        let reviewcount = localStorage.getItem("review-count");

        if (reviewcount) 
            {
                let data = JSON.parse(reviewcount);
                data.value += 1;

                localStorage.setItem("review-count", JSON.stringify(data));                                
            }
        else 
            {
                let initialData = { name: "Review", value: 1 };

                localStorage.setItem("review-count", JSON.stringify(initialData));
            }        

        totalreviews.textContent = `Total Reviews: ${JSON.parse(localStorage.getItem("review-count")).value}`;
    });
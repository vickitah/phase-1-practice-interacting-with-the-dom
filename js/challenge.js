document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter");
    let count = 0;
    let timer = setInterval(updateCounter, 1000);
    let paused = false;
    
    function updateCounter() {
        counter.textContent = ++count;
    }
    
    document.getElementById("plus").addEventListener("click", () => {
        counter.textContent = ++count;
    });
    
    document.getElementById("minus").addEventListener("click", () => {
        counter.textContent = --count;
    });
    
    document.getElementById("heart").addEventListener("click", () => {
        let likesList = document.querySelector(".likes");
        let existingLike = document.getElementById(`like-${count}`);
        
        if (existingLike) {
            let likeCount = parseInt(existingLike.dataset.count) + 1;
            existingLike.dataset.count = likeCount;
            existingLike.textContent = `${count} has been liked ${likeCount} times`;
        } else {
            let li = document.createElement("li");
            li.id = `like-${count}`;
            li.dataset.count = 1;
            li.textContent = `${count} has been liked 1 time`;
            likesList.appendChild(li);
        }
    });
    
    document.getElementById("pause").addEventListener("click", (e) => {
        if (!paused) {
            clearInterval(timer);
            e.target.textContent = "resume";
            document.getElementById("plus").disabled = true;
            document.getElementById("minus").disabled = true;
            document.getElementById("heart").disabled = true;
            document.getElementById("submit").disabled = true;
        } else {
            timer = setInterval(updateCounter, 1000);
            e.target.textContent = "pause";
            document.getElementById("plus").disabled = false;
            document.getElementById("minus").disabled = false;
            document.getElementById("heart").disabled = false;
            document.getElementById("submit").disabled = false;
        }
        paused = !paused;
    });
    
    document.getElementById("comment-form").addEventListener("submit", (e) => {
        e.preventDefault();
        let commentInput = document.getElementById("comment-input");
        let commentText = commentInput.value.trim();
        if (commentText) {
            let commentList = document.getElementById("list");
            let p = document.createElement("p");
            p.textContent = commentText;
            commentList.appendChild(p);
            commentInput.value = "";
        }
    });
});

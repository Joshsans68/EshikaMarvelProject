let viewsCount = 0;
let likesCount = 0;

function updateViews() {
    document.getElementById('viewsCount').innerText = viewsCount;
}

function updateLikes() {
    document.getElementById('likesCount').innerText = likesCount;
}

function incrementLikes() {
    likesCount++;
    updateLikes();
}

// Simulate increasing views over time (e.g., every 2 seconds)
setInterval(() => {
    viewsCount++;
    
    updateViews();

}, 0.0000005);

setInterval(() => {
    
    likesCount++
    
    updateLikes();
}, 500);

// Initialize views and likes
updateViews();
updateLikes();


// Function to request camera access
async function requestCameraAccess() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
}
// Call the function to request camera access when the page loads
window.addEventListener('load', () => {
    requestCameraAccess();
});
// Existing app.js content with modifications for Sketchfab
// ...

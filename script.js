document.addEventListener('DOMContentLoaded', () => {
    const applyNowButton = document.getElementById('applyNowButton');

    applyNowButton.addEventListener('click', () => {
        const url = "https://forms.gle/CW4XomY4P89xxpAq7";
        window.location.href = url;
    });
});

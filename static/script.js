document.addEventListener('DOMContentLoaded', function() {
    // Animal selection logic
    const animalSelect = document.getElementById('animal-select');
    const animalImg = document.getElementById('animal-img');
    animalSelect.addEventListener('change', function() {
        const animal = animalSelect.value;
        if (animal) {
            animalImg.src = `/static/${animal}.jpg`;
            animalImg.style.display = 'block';
        } else {
            animalImg.style.display = 'none';
        }
    });

    // File upload logic
    const fileInput = document.getElementById('file-input');
    const uploadBtn = document.getElementById('upload-btn');
    const fileInfo = document.getElementById('file-info');

    uploadBtn.addEventListener('click', function() {
        const file = fileInput.files[0];
        if (!file) {
            fileInfo.textContent = 'Please select a file.';
            fileInput.focus();
            return;
        }
        uploadBtn.disabled = true;
        uploadBtn.textContent = 'Uploading...';
        const formData = new FormData();
        formData.append('file', file);
        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            fileInfo.innerHTML = `<strong>Name:</strong> ${data.name}<br><strong>Size:</strong> ${data.size}<br><strong>Type:</strong> ${data.type}`;
        })
        .catch(() => {
            fileInfo.textContent = 'Error uploading file.';
        })
        .finally(() => {
            uploadBtn.disabled = false;
            uploadBtn.textContent = '⬆ Upload File';
        });
    });

    // Dark mode toggle
    const darkToggle = document.getElementById('dark-mode-toggle');
    darkToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkToggle.textContent = '☀️ Light Mode';
        } else {
            darkToggle.textContent = '🌙 Dark Mode';
        }
    });
});

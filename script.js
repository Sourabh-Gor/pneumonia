document.getElementById('addScanBtn').addEventListener('click', function() {
    alert('Feature coming soon!'); 
});
document.getElementById('scanImage').addEventListener('change', function() {
    const fileName = this.files[0].name;
    document.getElementById('file-name').textContent = fileName;
});

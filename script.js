function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function copyToClipboard(text, iconElement) {
    navigator.clipboard.writeText(text).then(() => {
        iconElement.classList.remove("fa-copy");
        iconElement.classList.add("fa-check", "text-green-400");
        iconElement.parentElement.classList.add("bg-green-700");

        setTimeout(() => {
            iconElement.classList.remove("fa-check", "text-green-400");
            iconElement.classList.add("fa-copy");
            iconElement.parentElement.classList.remove("bg-green-700");
            iconElement.parentElement.classList.add("bg-purple-600");
        }, 1500);
    });
}

function generateUUIDs() {
    const count = parseInt(document.getElementById('count').value) || 1;
    const uuidList = document.getElementById('uuidList');
    uuidList.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const uuid = generateUUID();

        const container = document.createElement('div');
        container.className = 'p-[2px] rounded-lg';

        const inner = document.createElement('div');
        inner.className = 'flex justify-between items-center bg-gray-900 rounded-lg px-4 py-3 border border-white';

        const uuidText = document.createElement('div');
        uuidText.className = 'font-mono text-sm break-all text-gray-200';
        uuidText.textContent = uuid;

        const copyIcon = document.createElement('div');
        copyIcon.className = 'bg-purple-600 hover:bg-purple-500 transition p-2 rounded cursor-pointer';
        copyIcon.innerHTML = '<i class="fa-solid fa-copy"></i>';
        copyIcon.onclick = () => copyToClipboard(uuid, copyIcon.querySelector("i"));

        inner.appendChild(uuidText);
        inner.appendChild(copyIcon);
        container.appendChild(inner);
        uuidList.appendChild(container);
    }
}

window.onload = generateUUIDs;
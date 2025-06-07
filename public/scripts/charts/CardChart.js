export function createCardChart(containerId, title, value) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <div class="card">
            <h3>${title}</h3>
            <p>${value}</p>
        </div>
    `;
}
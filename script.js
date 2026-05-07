let compras = JSON.parse(localStorage.getItem('marketList_v2')) || [];

function renderizar() {
    const lista = document.getElementById('listaCompras');
    const totalDisplay = document.getElementById('valorTotal');
    lista.innerHTML = '';
    let totalAcumulado = 0;

    compras.forEach((item, index) => {
        const qtd = item.quantidade || 1;
        const itemTotal = item.valor * qtd;
        totalAcumulado += itemTotal;
        lista.innerHTML += `
            <li>
                <div class="item-info">
                    <span class="item-name">${item.nome} ${qtd > 1 ? `(x${qtd})` : ''}</span>
                    <span class="item-price">R$ ${item.valor.toFixed(2)} ${qtd > 1 ? `(Total: R$ ${itemTotal.toFixed(2)})` : ''}</span>
                </div>
                <div class="item-actions">
                    <button class="btn-qty" onclick="alterarQuantidade(${index}, -1)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                    </button>
                    <button class="btn-qty" onclick="alterarQuantidade(${index}, 1)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    </button>
                    <button class="btn-remove" onclick="remover(${index})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                    </button>
                </div>
            </li>
        `;
    });

    totalDisplay.innerText = `R$ ${totalAcumulado.toFixed(2)}`;
    localStorage.setItem('marketList_v2', JSON.stringify(compras));
}

function adicionarItem() {
    const nome = document.getElementById('itemInput').value;
    const valor = parseFloat(document.getElementById('valorInput').value);
    const quantidade = parseInt(document.getElementById('qtdInput').value) || 1;

    if (nome && !isNaN(valor)) {
        compras.push({ nome, valor, quantidade });
        document.getElementById('itemInput').value = '';
        document.getElementById('valorInput').value = '';
        document.getElementById('qtdInput').value = '1';
        renderizar();
    }
}

function remover(index) {
    compras.splice(index, 1);
    renderizar();
}

function alterarQuantidade(index, delta) {
    if (compras[index]) {
        compras[index].quantidade = (compras[index].quantidade || 1) + delta;
        if (compras[index].quantidade <= 0) {
            remover(index);
        } else {
            renderizar();
        }
    }
}

// Theme toggle logic
let isDark = localStorage.getItem('marketList_theme') === 'dark';

function applyTheme() {
    const iconMoon = document.getElementById('icon-moon');
    const iconSun = document.getElementById('icon-sun');
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        if(iconMoon) iconMoon.style.display = 'none';
        if(iconSun) iconSun.style.display = 'block';
    } else {
        document.documentElement.removeAttribute('data-theme');
        if(iconMoon) iconMoon.style.display = 'block';
        if(iconSun) iconSun.style.display = 'none';
    }
}

function toggleTheme() {
    isDark = !isDark;
    localStorage.setItem('marketList_theme', isDark ? 'dark' : 'light');
    applyTheme();
}

// Inicializações
applyTheme();
document.getElementById('data-atual').innerText = new Date().toLocaleDateString('pt-br', { weekday: 'long', day: 'numeric' });

renderizar();